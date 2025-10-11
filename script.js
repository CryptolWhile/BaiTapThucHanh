// ==================== A. VALIDATION FORM ====================
      document
        .querySelector(".contact-form")
        .addEventListener("submit", function (e) {
          e.preventDefault(); // Ngăn chặn gửi form mặc định

          // Lấy giá trị từ các trường input
          const name = document.getElementById("name").value.trim();
          const email = document.getElementById("email").value.trim();
          const message = document.getElementById("message").value.trim();

          //Biểu thức chính quy (Regex) để kiểm tra email hợp lệ:
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

          // Kiểm tra các trường bắt buộc
          if (name === "") {
            alert("Vui lòng nhập họ và tên.");
            return;
          }

          if (!emailRegex.test(email)) {
            alert("Vui lòng nhập đúng định dạng email.");
            return;
          }

          if (message.length < 10) {
            alert("Nội dung tin nhắn phải có ít nhất 10 ký tự.");
            return;
          }
          // Nếu hợp lệ
          alert("Gửi thông tin thành công! Cảm ơn bạn đã liên hệ.");
          this.reset();
        });
      // ==================== B. XỬ LÝ CHECKBOX HOÀN THÀNH ====================
      // Lấy tất cả các ô checkbox trong bảng goals-table.
      const checkboxes = document.querySelectorAll(
        '.goals-table input[type="checkbox"]'
      );

      checkboxes.forEach((checkbox) => {
        // Gắn sự kiện change — khi người dùng tick hoặc bỏ tick checkbox.
        checkbox.addEventListener("change", function () {
          // this là checkbox hiện tại.
          // closest('tr') tìm hàng <tr> chứa checkbox đó.
          const row = this.closest("tr");

          // Nếu checkbox được tick (checked === true):
          // Đổi màu nền hàng → xanh nhạt #c6f5c6
          // Gạch ngang chữ (line-through)
          // Nếu bỏ tick → khôi phục về mặc định.
          if (this.checked) {
            row.style.backgroundColor = "#c6f5c6";
            row.style.textDecoration = "line-through";
          } else {
            row.style.backgroundColor = "";
            row.style.textDecoration = "";
          }
        });
      });

      // ==================== C. HIỆU ỨNG ẢNH ĐẠI DIỆN ====================
      const avatar = document.querySelector(".responsive-img"); // Lấy ảnh có class responsive-img.
      // → Khi rê chuột vào ảnh (mouseover):
      // transform: scale(1.05) → phóng to nhẹ 5%
      // border → thêm khung viền màu xanh nhạ
      // transition → tạo hiệu ứng chuyển mượt 0.3 giây
      avatar.addEventListener("mouseover", function () {
        this.style.transform = "scale(1.05)";
        this.style.border = "3px solid #5bc0de";
        this.style.transition = "all 0.3s ease";
      });
      //     → Khi rời chuột ra khỏi ảnh (mouseout):
      // Ảnh trở lại kích thước bình thường

      // Xóa khung viền
      avatar.addEventListener("mouseout", function () {
        this.style.transform = "scale(1)";
        this.style.border = "none";
      });
      // ==================== NÚT BACK TO TOP ====================
      const topButton = document.createElement("button");
      topButton.textContent = "⬆"; // chỉ hiển thị biểu tượng mũi tên
      topButton.id = "backToTop";
      topButton.style.position = "fixed";
      topButton.style.bottom = "20px";
      topButton.style.right = "20px";
      topButton.style.display = "none";
      topButton.style.width = "45px"; // chiều rộng nút
      topButton.style.height = "45px"; // chiều cao nút
      topButton.style.border = "none";
      topButton.style.borderRadius = "50%"; // bo tròn 100%
      topButton.style.backgroundColor = "#007bff"; // màu nền
      topButton.style.color = "white";
      topButton.style.cursor = "pointer";
      topButton.style.fontSize = "22px"; // to hơn một chút
      topButton.style.boxShadow = "0 2px 5px rgba(0,0,0,0.3)"; // đổ bóng nhẹ
      topButton.style.transition = "all 0.3s ease"; // hiệu ứng hover

      document.body.appendChild(topButton);

      window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
          topButton.style.display = "block";
        } else {
          topButton.style.display = "none";
        }
      });

      topButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });