# DelishBite🔥

A modern static website hosted on **Amazon S3** with a custom domain and secured using **CloudFront, AWS Certificate Manager (ACM), and Route 53**.  
This project demonstrates how to host, secure, and deliver a responsive food/restaurant website with AWS services.

---

## 🚀 Features
- **Modern UI** with purple & pink theme  
- **Responsive design** (mobile-friendly)  
- **Smooth animations** for hero images & menu cards  
- **Delicious food gallery** (BBQ, steak, burgers, skewers, pasta, desserts)  
- **About section** with chef highlight  
- **Contact form** with details & social icons  
- **Hosted on S3** as a static website  
- **Secured with HTTPS** using CloudFront + ACM  
- **Custom domain** managed via Route 53  

---

## 🏗️ Project Structure

---

## ⚙️ Deployment Steps

### 1. Create an S3 bucket
- Bucket name: `jannify-s3-website`
- Enable **ACLs**
- Disable **Block Public Access**
- Enable **Versioning**
- Enable **Default Encryption**

### 2. Upload website files
- Upload `index.html` and the `assets/` folder.

### 3. Enable Static Website Hosting
- In **Properties → Static website hosting**  
- Set `index.html` as the **Index document**

### 4. Secure with CloudFront + ACM + Route 53
- Create a CloudFront distribution with S3 as the origin  
- Request SSL certificate in **ACM (us-east-1)**  
- Point domain via **Route 53** to CloudFront  

---

## 🌐 Live Website
👉 [https://jannifyworks.space/](https://jannifyworks.space/)  

---

## 🛡️ Security
- Bucket policy prevents accidental deletion of `index.html`  
- Public read-only access for objects  
- HTTPS enforced with CloudFront  
- Versioning enabled for rollback  

---

## 📚 Learnings
- Hosting on S3 is simple, but securing it requires **CloudFront, ACM, and Route 53**  
- Understanding difference between **ACLs vs Bucket Policies**  
- Static website hosting turns plain files into a working website  

---

## 👩‍💻 Author
Built with ❤️ by [Jannat](https://github.com/Jannat-cloud)  
