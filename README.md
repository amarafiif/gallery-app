# Gallery App Restful API
A art Restful API gallery application that allows users to upload images of their artwork with using ExpressJs, PrismaJS, Multer, and ImageKit.io. 💜


## Installation
To start this project with Express REST API, clone this repository from GitHub and install the dependencies.
``` bash
git clone https://github.com/amarafiif/gallery-app.git
cd gallery-app
npm install
```

Then, configure the environment according to the .env.example in this repository then adjust the values ​​to what you have. What you need to configure is:
```javascript
PORT = 
DATABASE_URL = 
JWT_KEY = 

IMAGEKIT_PUBLIC_KEY = 
IMAGEKIT_SECRET_KEY = 
IMAGEKIT_URL_ENDPOINT = 
```

Then, create a new database and generate the prism schema with this command:
``` node
npx prisma migrate dev
```

Finally, run this project:
``` node
npm run dev
```
