(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"19vq":function(t,e,a){"use strict";a.r(e);var r=a("e7F3"),o=a("TJPC"),s=a("enAU");Object(r.c)("required",o.h),Object(r.c)("max",o.d),Object(r.c)("min",o.e),Object(r.c)("email",o.b),Object(r.c)("confirmed",o.a),Object(r.c)("regex",o.g),Object(r.d)("id",s);var i={components:{ValidationObserver:r.a,ValidationProvider:r.b},props:{actionForm:{type:String,required:!0},redirectUri:{type:String,required:!0},dataUri:{type:String,default:""},filterGrupUser:{type:Array,required:!0}},data:function(){return{form_data:{nama:"",email:"",telepon:"",password:"",password_confirmation:""},show_password:!1,field_state:!1,form_alert_state:!1,form_alert_color:"",form_alert_text:""}},mounted:function(){this.getFormData()},methods:{getFormData:function(){var t=this;this.dataUri&&(this.field_state=!0,axios.get(this.dataUri).then((function(e){if(e.data.success){var a=e.data.data;t.form_data={nama:a.nama,email:a.email,telepon:a.telepon},t.field_state=!1}else t.form_alert_state=!0,t.form_alert_color="error",t.form_alert_text=e.data.message,t.field_state=!1})).catch((function(e){t.form_alert_state=!0,t.form_alert_color="error",t.form_alert_text=response.data.message,t.field_state=!1})))},clearForm:function(){this.form_data={nama:"",email:"",telepon:"",password:"",password_confirmation:""},this.$refs.observer.reset()},submitForm:function(){var t=this;this.$refs.observer.validate().then((function(e){e&&(t.field_state=!0,t.postFormData())}))},postFormData:function(){var t=this,e=new FormData(this.$refs["post-form"]);this.dataUri?e.append("_method","put"):(e.append("password",this.form_data.password),e.append("password_confirmation",this.form_data.password_confirmation)),axios.post(this.actionForm,e).then((function(e){e.data.success?(t.form_alert_state=!0,t.form_alert_color="success",t.form_alert_text=e.data.message,t.goto(t.redirectUri)):(t.field_state=!1,t.form_alert_state=!0,t.form_alert_color="error",t.form_alert_text=e.data.message)})).catch((function(e){t.field_state=!1,t.form_alert_state=!0,t.form_alert_color="error",t.form_alert_text="Oops, something went wrong. Please try again later."}))}}},n=a("KHd+"),d=Object(n.a)(i,void 0,void 0,!1,null,null,null);e.default=d.exports}}]);