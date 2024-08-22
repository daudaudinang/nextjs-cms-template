## NextJS Template For CMS

## Cài đặt và sử dụng

1. Install dependencies

```bash
npm install
```

2. Chạy server dev

```bash
npm run dev
```

3. Build product

```bash
npm run build
```

4. Chạy server product

```bash
npm run start
```

5. Sửa các lỗi format code và sửa tự động

```bash
npm run format
```

6. Kiểm tra lỗi format code

```bash
npm run format:check
```

7. Kiểm tra lỗi code

```bash
npm run lint
```

8. Kiểm tra lỗi code và sửa tự động

```bash
npm run lint:fix
```

## Cấu trúc thư mục của ứng dụng

```
├── src
│   ├── actions: Quản lý các actions: login, logout, getProducts,...
│   ├── app: Chứa các component chính của ứng dụng
│   ├── components: Chứa các component tái sử dụng
│   ├── hooks: Chứa các custom hooks
│   ├── lib: Chứa các hàm hỗ trợ
│   ├── provider: Chứa các provider
|─── next.config.mjs: Cấu hình Next.js
|─── tsconfig.json: Cấu hình TypeScript
|─── .eslintrc.js: Cấu hình ESLint - Các rule để kiểm tra code
|─── .prettierrc.js: Cấu hình Prettier - Các rule để format code
|─── commitlint.config.js: Cấu hình commitlint - Các rule để kiểm tra commit message
|─── .husky: Cấu hình git hooks - Tự động format và kiểm tra lint code trước khi commit
|─── components.json: Cấu hình shadcn/ui
|─── .env.local: File .env chính
```

## Tech/framework sử dụng

-   Next.js 14
-   Shadcn/ui
-   Tailwind CSS
-   TypeScript
-   Zustand: Thư viện quản lý state
-   lucide-react: Icon
-   useSWR: Fetch data cho "client component"

## Công cụ bảo chất lượng code và commit

1. **ESLint**: Kiểm tra lỗi và enforce coding style.
2. **Prettier**: Tự động format code.
3. **Husky**: Thiết lập Git hooks.
4. **lint-staged**: Chạy linter trên các file đã staged.
5. **commitlint**: Kiểm tra format của commit messages.

## Quy ước Code

### JavaScript/TypeScript

-   Sử dụng 4 khoảng trắng để indent.
-   Không sử dụng dấu chấm phẩy ở cuối câu lệnh.
-   Ưu tiên sử dụng `const` và `let` thay vì `var`.
-   Sử dụng dấu ngoặc nhọn cho tất cả các block, kể cả khi chỉ có một câu lệnh.
-   Trước khi commit phải xóa mọi console.log và các đoạn code không cần thiết.

### NextJS

-   Tên components phải là PascalCase.
-   Ưu tiên sử dụng server component, chỉ sử dụng client component khi thực sự cần để đảm bảo hiệu năng tốt nhất có thể
-   Đối với các component có thể được tái sử dụng, ta khai báo nó trong thư mục `src/components`.
-   Đối với các component là 1 phần của trang web và ta muốn chia ra cho dễ quản lý thì khai báo nó trong thư mục components cùng cấp với trang đó.
-   Đảm bảo chia component theo nguyên tắc Single Responsibility: Mỗi component nên chỉ làm một việc và làm tốt việc đó. Nếu một component trở nên quá phức tạp, có thể chia nó thành nhiều component nhỏ hơn.

## Quy ước Commit

Chúng ta sử dụng Conventional Commits để chuẩn hóa commit messages:
<type\> [optional scope]: <description\> [optional body] [optional footer(s)]

### Các loại commit (type) chính:

-   **feat**: Thêm tính năng mới
-   **fix**: Sửa lỗi
-   **docs**: Thay đổi tài liệu
-   **style**: Thay đổi không ảnh hưởng đến code (khoảng trắng, định dạng, etc.)
-   **refactor**: Tái cấu trúc code
-   **test**: Thêm hoặc sửa test
-   **chore**: Các thay đổi khác không làm thay đổi src hoặc test

### Ví dụ:

feat(auth): add login functionality

Implement OAuth2 authentication
Add user profile page
BREAKING CHANGE: This changes the API response format for user data.

## Quy trình Commit

1. Viết code và thêm các thay đổi vào staging area (`git add`).
2. Chạy `git commit`. Điều này sẽ kích hoạt:
    - lint-staged: Kiểm tra và format code.
    - commitlint: Kiểm tra format của commit message.
3. Nếu có lỗi, sửa và thử lại.
4. Nếu thành công, commit sẽ được tạo.

## Lưu ý

-   Luôn pull code mới nhất từ remote repository trước khi bắt đầu làm việc.
-   Tạo branch mới cho mỗi feature hoặc fix.
-   Thường xuyên commit để tránh conflict lớn.
-   Viết unit tests cho code mới.
-   Review code của đồng nghiệp một cách cẩn thận và tôn trọng.

## Quy trình làm việc

1. Pull code mới nhất từ branch chính (thường là main hoặc develop):

```bash
git pull origin main
```

2. Tạo và chuyển sang branch mới cho feature/fix của bạn:

```bash
git checkout -b feature/your-feature-name
```

3. Viết code và thực hiện các thay đổi cần thiết.

4. Chạy linter và formatter:

```bash
npm run lint
npm run format
```

5. Sửa các lỗi được báo cáo bởi linter (nếu có):

```bash
npm run lint:fix
```

6. Thêm các thay đổi vào staging area:

```bash
git add .
```

7. Commit các thay đổi:

```bash
git commit -m "type: your commit message"
```

8. Push branch của bạn lên remote repository:

```bash
git push origin feature/your-feature-name
```

9. Tạo Pull Request trên GitHub/GitLab để merge code của bạn vào branch chính.

## Screenshots

#### Light mode

![Light mode](/screenshots/screenshot-1.png)

#### Dark mode

![Dark mode](/screenshots/screenshot-2.png)

#### Mini sidebar

![Mini sidebar](/screenshots/screenshot-3.png)

#### Sheet menu

<img src="/screenshots/screenshot-4.png" width="300">
