import{Q as e,S as r,U as s,V as a}from"./index-c36af887.js";const t=e({email:r().trim().required("Email is required"),password:r().trim().required("Password is required")}),m=e({email:r().trim().required("Email is required").email("Invalid email format"),password:r().trim().required("Password is required").min(6,"Password must be at least 6 characters").max(32,"Password must be at most 32 characters").matches(/[A-Z]/,"Password must contain at least one uppercase character").matches(/[@#$%^&*!]/,"Password must contain at least one special character: @#$%^&*!"),confirm_password:r().trim().required("Confirm Password is required").oneOf([s("password")],"Confirm Password is not match"),phonenumber:r().trim().required("Phonenumber is required !").length(10,"Phonenumber must be 10 characters").matches(/^0[0-9]{9}$/,"Phonenumber is not valid !"),address:r().trim().required("Address is required"),firstname:r().trim().required("First name is required !"),lastname:r().trim().required("Last name is required !"),gender:a().required("Gender is required !")}),d=e({email:r().trim().required("Email is required")});export{t as F,m as a,d as b};