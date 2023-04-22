// 基于formData
(function () {
  let upload = document.querySelector("#upload1");
  upload_inp = upload.querySelector(".upload_inp");
  upload_button_select = upload.querySelector(".upload_button.select");
  upload_button_upload = upload.querySelector(".upload_button.upload");
  upload_tip = upload.querySelector(".upload_tip");
  upload_list = upload.querySelector(".upload_list");
  let _file = null;

  //   上传文件到服务器
  const handleDisable = (flag) => {
    if (flag) {
      upload_button_select.classList.add("disable");
      upload_button_upload.classList.add("loading");
    } else {
      upload_button_select.classList.remove("disable");
      upload_button_upload.classList.remove("loading");
    }
  };
  upload_button_upload.addEventListener("click", () => {
    if (
      upload_button_select.classList.contains("disable") ||
      upload_button_upload.classList.contains("loading")
    ) {
      return;
    }
    console.log(_file);
    if (!_file) return;
    // 把文件传递给服务器 FormData / base64
    let formData = new FormData();
    formData.append("file", _file);
    formData.append("fileName", _file.name);
    handleDisable(true);
    instance
      .post("/upload_single", formData)
      .then((res) => {
        console.log(res);
        handleDisable(false);
        alert(`文件上传成功 ${res.servicePath}访问`);
        clearHandle();
      })
      .catch((err) => {
        console.log(err);
        handleDisable(false);
        clearHandle();
      });
  });

  //   移除按钮
  const clearHandle = () => {
    _file = null;
    upload_tip.style.display = "block";
    upload_list.style.display = "none";
    upload_list.innerHTML = ``;
  };
  upload_list.addEventListener("click", (e) => {
    let target = e.target;
    if (target.tagName === "EM") {
      // 点击的是移除按钮
      clearHandle();
    }
  });

  // 监听用户选择文件的操作 change事件 当选择文件发生改变时触发
  upload_inp.addEventListener("change", () => {
    // 获取用户选择的文件
    let file = upload_inp.files[0];
    if (!file) return;
    _file = file;
    // 限制文件上传的格式
    // if(!/(PNG|JPG|JPEG)/i.test(file.type)){
    //     alert('上传的文件只能说 PNG|JPG|JPEG格式')
    // }
    // 限制文件大小
    if (file.size > 2 * 1024 * 1024) {
      alert("上传文件不能超过2M");
      return;
    }
    // 显示上传的文件
    upload_tip.style.display = "none";
    upload_list.style.display = "block";
    upload_list.innerHTML = `<li>
            <span>文件：${file.name}</span>
            <span><em>移除</em></span>
        </li>`;
  });

  // 点击选择文件按钮
  upload_button_select.addEventListener("click", () => {
    if (
      upload_button_select.classList.contains("disable") ||
      upload_button_upload.classList.contains("loading")
    ) {
      return;
    }
    upload_inp.click();
  });
})();
// 基于base64
// (function () {
//   let upload = document.querySelector("#upload2");
//   upload_inp = upload.querySelector(".upload_inp");
//   upload_button_select = upload.querySelector(".upload_button.select");

//   // 验证是否处于可操作状态
//   const checkIsDisable = (element) => {
//     let classList = element.classList;
//     return classList.contains("disable") || classList.contains("loading");
//   };

//   //   把选择的文件读取称为base64
//   const changeBase64 = (file) => {
//     return new Promise((resolve, reject) => {
//       let fileReader = new FileReader();
//       fileReader.readAsDataURL(file);
//       fileReader.onload = (e) => {
//         resolve(e.target.result)
//       };
//     });
//   };

//   // 监听用户选择文件的操作 change事件 当选择文件发生改变时触发
//   upload_inp.addEventListener("change", async () => {
//     // 获取用户选择的文件
//     let file = upload_inp.files[0];
//     BASE64 = null,
//     data = null
//     if (!file) return;
//     if (file.size > 2 * 1024 * 1024) {
//       alert("上传文件不能超过2M");
//       return;
//     }
//     //   将文件变成base64
//     BASE64= await changeBase64(file)
//     try {
//         data= await instance.post('/upload_single_base64',{
//             // 防止传输过程中有些特殊字符编码乱掉
//             file:encodeURIComponent(BASE64),
//             filename:file.name
//         },{
//             headers:{
//                 'Content-type':"application/x-www-form-urlencoded"
//             }
//         })
//         alert(`文件上传成功 您可以基于${data.servicePath}`)
//     } catch (error) {
//         alert(error)
//     }
//   });

//   // 点击选择文件按钮
//   upload_button_select.addEventListener("click", function () {
//     if (checkIsDisable(this)) {
//       return;
//     }
//     upload_inp.click();
//   });
// })();
// 缩略图
(function () {
  let upload = document.querySelector("#upload3");
  upload_inp = upload.querySelector(".upload_inp");
  upload_button_select = upload.querySelector(".upload_button.select");
  upload_button_upload = upload.querySelector(".upload_button.upload");
  upload_abbre = upload.querySelector(".upload_abbre");
  upload_abbre_img = upload_abbre.querySelector("img");
  let _file = null;

  //   上传文件到服务器
  const handleDisable = (flag) => {
    if (flag) {
      upload_button_select.classList.add("disable");
      upload_button_upload.classList.add("loading");
    } else {
      upload_button_select.classList.remove("disable");
      upload_button_upload.classList.remove("loading");
    }
  };
  upload_button_upload.addEventListener("click", async () => {
    if (
      upload_button_select.classList.contains("disable") ||
      upload_button_upload.classList.contains("loading")
    ) {
      return;
    }
    console.log(_file);
    if (!_file) return;
    // 把文件传递给服务器 FormData / base64
    let formData = new FormData();
    handleDisable(true);
    // 生成文件的HASH名
    let { filename } = await changeBuffer(_file);
    formData.append("file", _file);
    formData.append("filename", filename);
    instance
      .post("/upload_single_name", formData)
      .then((res) => {
        console.log(res);
        handleDisable(false);
        alert(`文件上传成功 ${res.servicePath}访问`);
      })
      .catch((err) => {
        console.log(err);
        handleDisable(false);
      });
  });

  upload_list.addEventListener("click", (e) => {
    let target = e.target;
    if (target.tagName === "EM") {
      // 点击的是移除按钮
    }
  });

  const changeBase64 = (file) => {
    return new Promise((resolve, reject) => {
      let fileReader = new FileReader();
      //   将文件转为base64
      fileReader.readAsDataURL(file);
      fileReader.onload = (e) => {
        resolve(e.target.result);
      };
    });
  };

  const changeBuffer = (file) => {
    return new Promise((resolve, reject) => {
      let fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = (e) => {
        let buffer = e.target.result;
        spark = new SparkMD5.ArrayBuffer();
        spark.append(buffer);
        const HASH = spark.end();
        const suffix = /\.([a-zA-Z0-9]+)$/.exec(file.name)[1];

        resolve({
          buffer,
          HASH,
          suffix,
          filename: `${HASH}.${suffix}`
        });
      };
    });
  };

  // 监听用户选择文件的操作 change事件 当选择文件发生改变时触发
  upload_inp.addEventListener("change", async () => {
    // 获取用户选择的文件
    let file = upload_inp.files[0];
    let base64 = null;
    if (!file) return;
    _file = file;
    if (file.size > 2 * 1024 * 1024) {
      alert("上传文件不能超过2M");
      return;
    }
    //   文件预览 把文件对象转换成base64
    upload_button_select.classList.add("disable");
    base64 = await changeBase64(file);
    upload_button_select.classList.remove("disable");
    console.log(base64);
    upload_abbre.style.display = "block";
    upload_abbre_img.src = base64;
  });

  // 点击选择文件按钮
  upload_button_select.addEventListener("click", () => {
    if (
      upload_button_select.classList.contains("disable") ||
      upload_button_upload.classList.contains("loading")
    ) {
      return;
    }
    upload_inp.click();
  });
})();
// 进度控制
(function () {
  let upload = document.querySelector("#upload4");
  upload_inp = upload.querySelector(".upload_inp");
  upload_button_select = upload.querySelector(".upload_button.select");
  upload_progress = upload.querySelector(".upload_progress");
  upload_progress_value = upload_progress.querySelector(".value");

  // 监听用户选择文件的操作 change事件 当选择文件发生改变时触发
  upload_inp.addEventListener("change", async () => {
    // 获取用户选择的文件
    let file = upload_inp.files[0];
    if (!file) return;
    upload_button_select.classList.add("loading");
    try {
      let formData = new FormData();
      formData.append("file", file);
      formData.append("filename", file.name);
      let data = await instance.post("/upload_single", formData, {
        onUploadProgress(ev) {
          let { loaded, total } = ev;
          upload_progress.style.display = "block";
          upload_progress_value.style.width = `${(loaded / total) * 100}%`;
        }
      });
      upload_progress_value.style.width = `100%`;
      alert(`上传成功 通过${data.servicePath}查看`);
    } catch (error) {
      alert(`文件上传视频`);
    } finally {
      upload_button_select.classList.remove("loading");
      upload_progress.style.display = "none";
      upload_progress_value.style.width = `0%`;
    }

    upload_button_select.classList.remove("loading");
  });

  // 点击选择文件按钮
  upload_button_select.addEventListener("click", () => {
    if (
      upload_button_select.classList.contains("disable") ||
      upload_button_upload.classList.contains("loading")
    ) {
      return;
    }
    upload_inp.click();
  });
})();
// 多文件
(function () {
  let upload = document.querySelector("#upload5");
  upload_inp = upload.querySelector(".upload_inp");
  upload_button_select = upload.querySelector(".upload_button.select");
  upload_button_upload = upload.querySelector(".upload_button.upload");
  upload_list = upload.querySelector(".upload_list");
  let _files = [];

  //   上传文件到服务器
  const handleDisable = (flag) => {
    if (flag) {
      upload_button_select.classList.add("disable");
      upload_button_upload.classList.add("loading");
    } else {
      upload_button_select.classList.remove("disable");
      upload_button_upload.classList.remove("loading");
    }
  };
  upload_button_upload.addEventListener("click", async () => {
    if (_files.length===0) return;
    let upload_list_arr = Array.from(upload_list.querySelectorAll('li'))
    _files = _files.map(item => {
        let fm = new FormData()
        let curLi = upload_list_arr.find(liBox=>liBox.getAttribute('key')===item.key)
        curSpan = curLi?curLi.querySelector('span:nth-last-child(1)'):null
        fm.append('file',item.file)
        fm.append('filename',item.filename)
        return instance.post('/upload_single',fm,{
            onUploadProgress(ev){
                if(curSpan){
                    curSpan.innerHTML = `${(ev.loaded/ev.total*100).toFixed(2)}%`
                }
            }
        }).then( res=>{
            curSpan.innerHTML = `100%`
        })
    })
    Promise.all(_files).then(()=>{
        alert('所有文件都上传成功')
    }).catch(()=>{
        alert('上传过程中遇到问题')
    }).finally(()=>{
        handleDisable(true)
        _files = []
        upload_list.innerHTML  = ''
    upload_list.style.display = 'none'
    })
 
  });

  upload_list.addEventListener("click", (e) => {
    let target = e.target;
    if (target.tagName === "EM") {
      // 点击的是移除按钮
    }
  });

    //   基于事件委托完成移除
    upload_list.addEventListener('click',function(ev){
        let target = ev.target
        let curLi = null
        let key = null
        if(target.tagName === 'EM'){
            curLi = target.parentNode.parentNode
            if(!curLi) return
            upload_list.removeChild(curLi)
            key = curLi.getAttribute('key')
            _files = _files.filter(item => item.key !== key)
            console.log(_files);
        }
    })

    // 获取唯一值
    const createRandom = () =>{
        let ran = new Date() * Math.random()
        return ran.toString(16).replace('.','')
    }

  // 监听用户选择文件的操作 change事件 当选择文件发生改变时触发
  upload_inp.addEventListener("change", async () => {
    // 获取用户选择的文件
    _files = Array.from(upload_inp.files);
    if (_files.length === 0) return;

    _files = _files.map(file =>{
        return {
            file,
            filename:file.name,
            key:createRandom()
        }
    })
    console.log(_files);
    let str = ``;
    _files.forEach((item,index) => {
      str += `<li key='${item.key}'>
        <span>文件${index+1}: ${item.filename}</span>
        <span><em>移除</em></span>
    </li>`;
    });
    upload_list.innerHTML  = str
    upload_list.style.display = 'block'
  });

  // 点击选择文件按钮
  upload_button_select.addEventListener("click", () => {
    if (
      upload_button_select.classList.contains("disable") ||
      upload_button_upload.classList.contains("loading")
    ) {
      return;
    }
    upload_inp.click();
  });
})();
// 大文件上传
(function () {
  let upload = document.querySelector("#upload7");
  upload_inp = upload.querySelector(".upload_inp");
  upload_button_select = upload.querySelector(".upload_button.select");
  upload_progress = upload.querySelector(".upload_progress");
  upload_progress_value = upload_progress.querySelector(".value");

  const changeBuffer = (file) => {
    return new Promise((resolve, reject) => {
      let fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = (e) => {
        let buffer = e.target.result;
        spark = new SparkMD5.ArrayBuffer();
        spark.append(buffer);
        const HASH = spark.end();
        const suffix = /\.([a-zA-Z0-9]+)$/.exec(file.name)[1];

        resolve({
          buffer,
          HASH,
          suffix,
          filename: `${HASH}.${suffix}`
        });
      };
    });
  };


  // 监听用户选择文件的操作 change事件 当选择文件发生改变时触发
  upload_inp.addEventListener("change", async () => {
    // 获取用户选择的文件
    let file = upload_inp.files[0];
    if (!file) return;
    upload_button_select.classList.add("loading");
    upload_progress.style.display = 'block'

    // 获取文件的HASH
    let aleady = [],data=null, {HASH,suffix} = await changeBuffer(file)
    console.log(file,HASH)

    // 获取已经上传的切片信息
    try {
      data = await instance.get('/upload_already',{
        params:{
          HASH
        }
      })
      if(+data.code ===0){
        aleady = data.fileList
      }
    } catch (error) {}

    // 实现文件切片处理 [固定数量&固定大小]
    let max = 1024*100,count = Math.ceil(file.size / max),index = 0,chunks=[]
    if(count>100){
      max = file.size / 100
      count = 100
    }
    while(index<count){
      chunks.push({
        file:file.slice(index*max,(index+1)*max),
        filename:`${HASH}_${index+1}_${suffix}`
      })
      index++
    }
    // 上传成功的处理
    index=  0
    const clear = () => {
      upload_button_select.classList.remove("loading");
      upload_progress.style.display = 'none'
      upload_progress_value.style.width = '0%'
    }
    const complete =async () => {
      // 管控进度条
      index++
      upload_progress_value.style.width = `${index/count*100}%`
      // 当所有切片都上传成功 我们合并切片
      if(index<count) return
      upload_progress_value.style.width = `100%`
      try {
        data= await instance.post('upload_merge',{
          HASH,
          count
        },{
          headers:{
            'Content-type':'application/x-www-form-urlencoded'
          }
        })
        if(+data.code===0){
          alert(`文件上传成功 ${data.servicePath}查看`)
          clear()
          return
        }
        throw data.codeText
      } catch (error) {
        aleady('切片合并失败 请您稍后重试');
        clear()
      }
    }
    console.log(aleady,'已经上传过的');
    // 把每个切片都上传到服务器
    console.log(chunks,'分配的内容');
    chunks.forEach(chunk=>{
      // 已经上传的 无需在上传
      if(aleady.length > 0&& aleady.includes(chunk.filename)){
        complete()
        return
      }
      let fm = new FormData()
      fm.append('file',chunk.file)
      fm.append('filename',chunk.filename)
      instance.post('/upload_chunk',fm).then(data => {
        if(+data.code===0){
          complete()
          alert('上传成功')
          return 
        }
        return Promise.reject(data.codeText)
      }).catch(()=>{
        alert('当前文件上传失败')
        clear()
      })
    })

    
  });

  // 点击选择文件按钮
  upload_button_select.addEventListener("click", () => {
    if (
      upload_button_select.classList.contains("disable") ||
      upload_button_upload.classList.contains("loading")
    ) {
      return;
    }
    upload_inp.click();
  });
})();
