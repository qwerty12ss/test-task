import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	svg4everybody();
});

$(document).ready(function () {
	$('#confirmPassword').change(function () {
		let pass = $('#password').val();
		let confirmPass = $('#confirmPassword').val();

		if (pass !== confirmPass) {
			$('#password').css('border-bottom', '1px solid #FF4949');
			$('#confirmPassword').css('border-bottom', '1px solid #FF4949');
		}else {
			$('#password').css('border-bottom', '1px solid #F2F2F2');
			$('#confirmPassword').css('border-bottom', '1px solid #F2F2F2');
		}
	});
});
