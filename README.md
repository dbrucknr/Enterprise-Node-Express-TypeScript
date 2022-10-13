Steps to Create Project:

1. Create Git Repo on github.com

   - `git init`
   - `git add .`
   - `git commit -m "Initialize Project"`
   - `git branch -M main`
   - `git remote add orgin <address>`
   - `git push -u origin main`

2. Steps to establish dependencies & typescript

   - `npm init -y && tsc --init`
   - `npm i express`
   - `npm i -D @types/express`
   - `touch .gitignore`
   - Add: node_modules
   - Add: package-lock.json
   - `mkdir src && cd src`
   - `touch index.ts`
   - `cd ..`
   - Add: "start" command to package.json - tsc-node src/intex.ts
   - Run: npm start

3. Building Base System Instance:
   - Create System class (Singleton)
   - Create a async start method
   - Import constructs to `index.ts`
   - Run `npm start`
