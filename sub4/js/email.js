
        (function() {
            // https://dashboard.emailjs.com/admin/account
            emailjs.init({
              publicKey: "cyBI7dJ2SNpdpiaZo",
            });
        })();
    
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                // these IDs from the previous steps
                emailjs.sendForm('service_j8wkz3w', 'template_1iy8iok', this)
                    .then(() => {
                        console.log('SUCCESS!');
                        alert('메일 전송에 성공하였습니다.');
                    }, (error) => {
                        console.log('FAILED...', error);
                        alert('메일 전송에 실패하였습니다.');
                    });
            });
   