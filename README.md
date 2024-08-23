## NextJS Template For CMS
- Cung cấp sẵn template CMS responsive: login, logout, breadcrumb, sidebar, header, footer
- Chuyển đổi dark mode / light mode
- Xử lý i18n với next-intl
- Sử dụng shadcn/ui và tailwindcss để tạo giao diện
- Xử lý redirect login/logout và routing hoàn chỉnh
- Xử lý hiển thị loading page bằng TopProgressBar

## Mục lục
- [Demo](#demo)
- [Cài đặt và sử dụng](#cài-đặt-và-sử-dụng)
- [Cấu trúc thư mục của ứng dụng](#cấu-trúc-thư-mục-của-ứng-dụng)
- [Tech/framework sử dụng](#techframework-sử-dụng)
- [Công cụ bảo chất lượng code và commit](#công-cụ-bảo-chất-lượng-code-và-commit)
- [Quy ước Code](#quy-ước-code)
  - [JavaScript/TypeScript](#javascripttypescript)
  - [NextJS](#nextjs)
- [Quy ước sử dụng i18n (next-intl)](#quy-ước-sử-dụng-i18n-next-intl)
- [Quy ước đặt tên branch](#quy-ước-đặt-tên-branch)
- [Quy ước Commit](#quy-ước-commit)
- [Quy trình Commit](#quy-trình-commit)
- [Lưu ý](#lưu-ý)
- [Quy trình làm việc](#quy-trình-làm-việc)
- [Screenshots](#screenshots)

## Demo
Truy cập: [https://nextjs-cms-template.vercel.app](https://nextjs-cms-template.vercel.app/en/login?from=/)
Hướng dẫn sử dụng demo:
* Login: email và password bất kỳ, chỉ cần nhập lần đầu khi vào trang, sau đó currentUser fake sẽ được lưu vào cookies, những lần truy cập sau không cần login lại

## Cài đặt và sử dụng

1. Install dependencies

```bash
pnpm install
```

2. Chạy server dev

```bash
pnpm run dev
```

3. Build product

```bash
pnpm run build
```

4. Chạy server product

```bash
pnpm run start
```

5. Sửa các lỗi format code và sửa tự động

```bash
pnpm run format
```

6. Kiểm tra lỗi format code

```bash
pnpm run format:check
```

7. Kiểm tra lỗi code

```bash
pnpm run lint
```

8. Kiểm tra lỗi code và sửa tự động

```bash
pnpm run lint:fix
```

## Cấu trúc thư mục của ứng dụng

```
|─── public: Chứa các file tĩnh như ảnh, font, favicon
|─── configs: Chứa các cấu hình cho ứng dụng: i18n, theme,...
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
|─── components.json: Cài đặt shadcn/ui
|─── i18n.ts: Cài đặt i18n
|─── .env.local: File .env chính
```

## Tech/framework sử dụng

- Next.js 14
- Shadcn/ui
- Tailwind CSS
- TypeScript
- Zustand: Thư viện quản lý state (Dùng cho client component)
- lucide-react: Icon
- useSWR: Fetch data cho "client component"
- next-intl: Thay đổi ngôn ngữ

## Công cụ bảo chất lượng code và commit

1. **ESLint**: Kiểm tra lỗi và enforce coding style.
2. **Prettier**: Tự động format code.
3. **Husky**: Thiết lập Git hooks.
4. **lint-staged**: Chạy linter trên các file đã staged.
5. **commitlint**: Kiểm tra format của commit messages.

## Quy ước Code

### JavaScript/TypeScript
- Tên biến, hàm phải là camelCase.
- Tên file phải là kebab-case. (file .js, .ts)
- Sử dụng 4 khoảng trắng để indent.
- Không sử dụng dấu chấm phẩy ở cuối câu lệnh.
- Ưu tiên sử dụng `const` và `let` thay vì `var`.
- Sử dụng dấu ngoặc nhọn cho tất cả các block, kể cả khi chỉ có một câu lệnh.
- Trước khi commit phải xóa mọi console.log và các đoạn code không cần thiết.

### NextJS
- Tên components và tên file phải là PascalCase. (file .jsx, .tsx)
- Ưu tiên sử dụng server component, chỉ sử dụng client component khi thực sự cần để đảm bảo hiệu năng tốt nhất có thể
- Đối với các component có thể được tái sử dụng, ta khai báo nó trong thư mục `src/components`.
- Đối với các component là 1 phần của trang web và ta muốn chia ra cho dễ quản lý thì khai báo nó trong thư mục
  components cùng cấp với trang đó.
- Đảm bảo chia component theo nguyên tắc Single Responsibility: Mỗi component nên chỉ làm một việc và làm tốt việc đó.
  Nếu một component trở nên quá phức tạp, có thể chia nó thành nhiều component nhỏ hơn.

## Quy ước sử dụng i18n (next-intl)
Dự án này sử dụng next-intl để hỗ trợ đa ngôn ngữ. Việc sử dụng i18n giúp chúng ta dễ dàng quản lý và bảo trì nội dung đa ngôn ngữ trong ứng dụng.

### Quy tắc quan trọng
**Lưu ý: Tuyệt đối không được fixed cứng nội dung text trực tiếp trong components. Bắt buộc phải tạo và sử dụng key i18n cho mọi nội dung text trong ứng dụng.**

### Cách sử dụng
1. Mở các file ngôn ngữ trong thư mục `src/messages` (ví dụ: `en.json`, `vi.json`).
2. Thêm key và value tương ứng với ngôn ngữ của bạn.
```json
{
	"section": {
		"newKey": "New text in English"
	}
}
```

### Quy tắc gom nhóm và đặt tên key i18n
Để đảm bảo tính nhất quán và dễ quản lý, chúng ta tuân theo các quy tắc sau khi gom nhóm và đặt tên cho các key i18n:
#### 1. Cấu trúc phân cấp

Sử dụng cấu trúc phân cấp để tổ chức các key. Các nhóm chính bao gồm:

- `demo`: Cho các chuỗi liên quan đến giao diện demo.
- `common`: Cho các chuỗi sử dụng chung trong toàn bộ ứng dụng.
- `function`: Cho các chức năng chung của ứng dụng.
- `menu`: Cho các mục trong menu.
- `page`: Cho các trang cụ thể trong ứng dụng.

#### 2. Đặt tên key

- Sử dụng chữ thường và dấu gạch ngang (-) để phân tách các từ trong key.
- Đặt tên ngắn gọn nhưng vẫn đảm bảo ý nghĩa rõ ràng.
- Sử dụng tiếng Anh cho tên key để đảm bảo tính nhất quán giữa các file ngôn ngữ.

#### 3. Gom nhóm theo chức năng

- Gom các chuỗi liên quan đến cùng một chức năng hoặc thành phần vào cùng một nhóm.
- Ví dụ: Tất cả các chuỗi liên quan đến xác nhận được gom vào `common` với tiền tố `confirm-`.

#### 4. Tổ chức các trang

- Sử dụng nhóm `page` để tổ chức các chuỗi theo từng trang cụ thể.
- Mỗi trang có thể có các subkey riêng, ví dụ: `page.login.title`, `page.login.email`, etc.

#### 5. Tái sử dụng key chung

- Đặt các chuỗi được sử dụng ở nhiều nơi vào nhóm `common` để tái sử dụng.
- Ví dụ: Các nút hành động như "Lưu", "Hủy", "Xóa" nên được đặt trong `common`.

#### 6. Nhất quán trong việc sử dụng số ít/số nhiều

- Sử dụng số ít cho tên key trừ khi chuỗi đó luôn ở dạng số nhiều.
- Ví dụ: `menu.category` thay vì `menu.categories` nếu có thể dùng cho cả số ít và số nhiều.

#### 7. Tránh lặp lại thông tin

- Tránh lặp lại thông tin đã có trong cấu trúc phân cấp.
- Ví dụ: Sử dụng `page.login.title` thay vì `page.login.login-title`.

#### 8. Xử lý các biến động

- Đối với các chuỗi có biến động, sử dụng cú pháp placeholder của next-intl.
- Ví dụ: `"welcome-message": "Xin chào, {name}!"`.

#### Ví dụ cụ thể:

```json
{
	"common": {
		"save": "Lưu",
		"cancel": "Hủy",
		"confirm-delete": "Bạn có chắc chắn muốn xóa không?"
	},
	"page": {
		"login": {
			"title": "Đăng nhập",
			"email": "Email",
			"password": "Mật khẩu"
		}
	},
	"menu": {
		"home": "Trang chủ",
		"user": "Người dùng",
		"setting": "Cài đặt"
	}
}
```

## Quy ước đặt tên branch
Chúng ta sử dụng quy ước đặt tên branch sau để dễ dàng theo dõi mục đích và nội dung của mỗi branch:
1. Feature branches:
Mẫu: feature/<tên-tính-năng>
Ví dụ: feature/user-authentication, feature/product-search
Mô tả: Sử dụng cho việc phát triển tính năng mới.

2. Bugfix branches:
Mẫu: bugfix/<tên-lỗi>
Ví dụ: bugfix/login-error, bugfix/cart-calculation
Mô tả: Sử dụng để sửa các lỗi không khẩn cấp.

3. Hotfix branches:
Mẫu: hotfix/<tên-lỗi>
Ví dụ: hotfix/security-vulnerability, hotfix/critical-performance-issue
Mô tả: Sử dụng để sửa các lỗi khẩn cấp trên production.

4. Release branches:
Mẫu: release/<version>
Ví dụ: release/v1.0.0, release/v1.1.0
Mô tả: Sử dụng để chuẩn bị cho một phiên bản mới.

5. Documentation branches:
Mẫu: docs/<tên-tài-liệu>
Ví dụ: docs/api-guide, docs/user-manual
Mô tả: Sử dụng cho các thay đổi chỉ liên quan đến tài liệu.

6. Refactor branches:
Mẫu: refactor/<tên-refactor>
Ví dụ: refactor/improve-performance, refactor/clean-up-components
Mô tả: Sử dụng cho việc tái cấu trúc code mà không thêm tính năng mới hoặc sửa lỗi.

### Quy tắc chung:
* Sử dụng chữ thường và dấu gạch ngang (-) để phân tách các từ.
* Tên branch nên ngắn gọn nhưng mô tả được nội dung chính.
* Tránh sử dụng tên quá chung chung như "fix" hoặc "update".
* Nếu có issue tracker, có thể thêm số issue vào tên branch, ví dụ: feature/user-auth-#123.

### Quy trình làm việc với branches
* Tạo branch mới từ main (hoặc develop nếu sử dụng Git Flow).
* Đặt tên branch theo quy ước trên.
* Thực hiện các thay đổi và commit theo quy ước commit đã đề cập trước đó.
* Push branch lên remote repository.
* Tạo Pull Request khi tính năng hoặc fix hoàn tất.
* Sau khi được review và approve, merge branch vào main (hoặc develop).
* Xóa branch sau khi đã merge thành công.

Việc tuân thủ quy ước đặt tên branch này sẽ giúp team dễ dàng theo dõi và quản lý các thay đổi trong dự án, đồng thời tăng cường khả năng hợp tác và hiệu quả làm việc

## Quy ước chuẩn hóa Commit Message
Chúng ta sử dụng Conventional Commits để chuẩn hóa commit messages:
<type\> [optional scope]: <description\> [optional body] \[optional footer(s)]

### Các loại commit (type) chính:

- **feat**: Thêm tính năng mới
- **fix**: Sửa lỗi
- **docs**: Thay đổi tài liệu
- **style**: Thay đổi không ảnh hưởng đến code (khoảng trắng, định dạng, etc.)
- **refactor**: Tái cấu trúc code
- **test**: Thêm hoặc sửa test
- **chore**: Các thay đổi khác không làm thay đổi src hoặc test

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

- Luôn pull code mới nhất từ remote repository trước khi bắt đầu làm việc.
- Tạo branch mới cho mỗi feature hoặc fix.
- Thường xuyên commit để tránh conflict lớn.
- Viết unit tests cho code mới.
- Review code của đồng nghiệp một cách cẩn thận và tôn trọng.

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

<img src="/screenshots/screenshot-4.png" width="850" alt="">
