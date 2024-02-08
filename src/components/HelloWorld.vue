<template>
  <div>
    <input type="file" multiple @change="handleFileChange" />
    <button @click="uploadPhotos">Upload Photos</button>
    
  </div>
</template>

<script setup>
import { ref } from 'vue';
import COS from 'cos-js-sdk-v5';

// 创建响应式引用变量
const photosToUpload = ref([]);
const uploadedPhotoUrls = ref([]);
const strImg = ref('')

// 文件选择回调函数
const handleFileChange = (e) => {
  // 将选择的文件存储到photosToUpload变量中
  photosToUpload.value = Array.from(e.target.files);
};  
// 上传照片到腾讯云COS
const uploadPhotos = async () => {
  // 创建腾讯云COS实例
  const cos = new COS({
    SecretId: 'AKID6AJLE0kPubPNJNORsCjQ3qVQYsTAvbHs',
    SecretKey: 'Yvjadp8kJmXcvWI0fcv9IPkCsaWRHD4t',
  });
  // 定义腾讯云COS的存储桶、文件夹路径
  const bucket = 'zgd-1311699166';
  const folderPath = 'Path/';
  // 遍历需要上传的照片列表
  for (let i = 0; i < photosToUpload.value.length; i++) {
    const file = photosToUpload.value[i];
    const objectKey = folderPath + file.name;
    // 使用Promise封装上传操作
    await new Promise((resolve, reject) => {
      // 调用cos.putObject方法上传文件
      cos.putObject({
        Bucket: bucket,
        Region: 'ap-shanghai',
        Key: objectKey,
        StorageClass: 'STANDARD',
        Body: file,
      }, (err, data) => {
        if (err) {
          // 处理上传错误
          reject(err);
        } else {
          // 打印上传成功的返回结果
          console.log(`Upload successful. Photo URL: ${data.Location}`);
          // 将上传成功的照片地址存储到uploadedPhotoUrls变量中
          uploadedPhotoUrls.value.push(data.Location);
          resolve(data);
        }
      });
    });
  }



  strImg.value = uploadedPhotoUrls.value.join(',')


};


</script>
