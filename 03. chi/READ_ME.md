# Cac em setup cho anh cac extension nay trong visual studio code cua cac em nhe:

Name: ESLint
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

Name: Prettier - Code formatter
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

Name: Code Spell Checker
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker

# Moi lan tao project moi, moi nguoi chu y add va setting cac file sau vao folder root cua project:
- .gitignore: cau hinh cac file bo qua khi push len git (co the lay template tu link nay: https://www.toptal.com/developers/gitignore)
- .prettierignore: cau hinh cac file bo qua khi format source code bang prettier (co the copy y nguyen tu file .gitignore)
- .prettierrc.json: cau hinh format cua prettier

# Cac file mau anh de trong folder doc/ ngoai root

# Moi lan commit yeu cau moi nguoi format lai source code cua minh bang prettier:
- Cau lenh chay tren cmd (luu y run command o folder root cua project, noi co file .prettierrc.json): npx prettier --write .
  (neu cac em thay file change qua nhieu, khong can phai lo lang, vi co 1 so file prettier format lai nhung khong thay doi, cac em stage change tat ca file thi no se tu dong loai bo nhung file nao khong bi format)
