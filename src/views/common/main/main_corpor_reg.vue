<template>
	<section>
		<div class="corporate">
			<p class="title">资质认证</p>
			<div class="corpor-reg">
				<div class="titleMsg"><div class="icon"></div>由于对公业务，请您配合企业认证！</div>
				<div class="textMsg">
					<p>1. 企业认证规则：上传公司营业执照扫描件一张。</p>
					<p>2. 麦收网承诺所上传营业执照扫描件只用于对公业务，不作它途使用，其他任何人均无法查看。</p>
					<p>3. 注意：开对公发票时，按营业执照上的公司名称为公司抬头</p>
				</div>
				<div class="photo-upload">
					<p class="s-title">请上传营业执照：</p>
					<div class="drop">
						<dropzone id="myVueDropzone" url="https://httpbin.org/post" v-on:vdropzone-success="showSuccess" :maxNumberOfFiles=3 :maxFileSizeInMB=5 ></dropzone>
					</div>
					<div class="bttn">
						<button class="submit">提交</button>
						<button class="cancel">取消</button>
					</div>
				</div>
				<ul class="notice-list">
					<li>注意事项：</li>
					<li>1. 仅支持JPG，PNG，GIF格式的图片，文件大小不超过5M且数量不能超过3张。</li>
					<li>2. 以上所填信息须与您上传的营业执照一致，否则将无法通过验证。</li>
					<li>3. 上传证件为带有最新工商局年检盖章的副本。</li>
				</ul>
			</div>
	</section>
</template>

<script>
require('assets/css/main/corporate.less')
import Dropzone from 'components/Dropzone' //上传图片组件
export default {
	components: {
     Dropzone
  },
  data: function () {
    return {
	
    }
  },
	methods: {
		showSuccess: function (file) {
      console.log('A file was successfully uploaded')
		}
	},
}
</script>