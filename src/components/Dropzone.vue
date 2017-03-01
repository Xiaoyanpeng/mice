<template>

  <form :action="url" class="vue-dropzone dropzone" :id="id"></form>

</template>

<script>
require('assets/css/components/dropzone.css')
  var Dropzone = require('dropzone')
  Dropzone.autoDiscover = false

  export default {
    props: {
      id: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      },
      clickable: {
        type: Boolean,
        default: true
      },
      acceptedFileTypes: {
        type: String
      },
      thumbnailHeight: {
        type: Number,
        default: 150
      },
      thumbnailWidth: {
        type: Number,
        default: 150
      },
      showRemoveLink: {
        type: Boolean,
        default: true
      },
      maxFileSizeInMB: {
        type: Number,
        default: 2
      },
      maxNumberOfFiles: {
        type: Number,
        default: 5
      },
      autoProcessQueue: {
        type: Boolean,
        default: true
      },
      useFontAwesome: {
        type: Boolean,
        default: false      
      },
      headers: {
        type: Object
      },
      useCustomDropzoneOptions: {
        type: Boolean,
        default: false
      },
      dropzoneOptions: {
        type: Object
      }
    },
    methods: {
      removeAllFiles: function () {
        this.dropzone.removeAllFiles(true)
      },
      processQueue: function () {
        this.dropzone.processQueue()
      },
      removeFile: function (file) {
        this.dropzone.removeFile(file)
      }
    },
    computed: {
      cloudIcon: function () {
          return '<i class="am-icon-cloud-upload"></i>'
      },
      doneIcon: function () {
          return '<i class="am-icon-check am-icon-fw"></i>'
      },
      errorIcon: function () {
          return '<i class="am-icon-close am-icon-fw"></i>'
      }
    },
    mounted () {
      var element = document.getElementById(this.id)
      if (!this.useCustomDropzoneOptions) {
        this.dropzone = new Dropzone(element, {
          clickable: this.clickable,
          thumbnailWidth: this.thumbnailWidth,
          thumbnailHeight: this.thumbnailHeight,
          maxFiles: this.maxNumberOfFiles,
          maxFilesize: this.maxFileSizeInMB,
          dictRemoveFile: '删除',
          addRemoveLinks: this.showRemoveLink,
          acceptedFiles: this.acceptedFileTypes,
          autoProcessQueue: this.autoProcessQueue,
          headers: this.headers,
          dictDefaultMessage: this.cloudIcon +'<br>将文件拖到此处，或点击上传',
          previewTemplate: '<div class="dz-preview dz-file-preview">  <div class="dz-image" style="width:' + this.thumbnailWidth + 'px;height:' + this.thumbnailHeight + 'px"><img data-dz-thumbnail /></div>  <div class="dz-details">    <div class="dz-size"><span data-dz-size></span></div>    <div class="dz-filename"><span data-dz-name></span></div>  </div>  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>  <div class="dz-error-message"><span data-dz-errormessage></span></div>  <div class="dz-success-mark">' + this.doneIcon + ' </div>  <div class="dz-error-mark">' + this.errorIcon + '</div></div>'
        })
      } else {
        this.dropzone = new Dropzone(element, this.dropzoneOptions)
      }

      var vm = this
      this.dropzone.on('thumbnail', function (file) {
        vm.$emit('vdropzone-thumbnail', file)
      })
      this.dropzone.on('addedfile', function (file) {
        vm.$emit('vdropzone-file-added', file)
      })

      this.dropzone.on('removedfile', function (file) {
        vm.$emit('vdropzone-removed-file', file)
      })

      this.dropzone.on('success', function (file, response) {
        vm.$emit('vdropzone-success', file, response)
      })

      this.dropzone.on('error', function (file, error, xhr) {
        vm.$emit('vdropzone-error', file, error, xhr)
      })

      this.dropzone.on('sending', function(file, xhr, formData){
        vm.$emit('vdropzone-sending', file, xhr, formData)
      })

      this.dropzone.on('queuecomplete', function(file, xhr, formData){
        vm.$emit('vdropzone-queue-complete', file, xhr, formData)
      })
    }
  }

</script>