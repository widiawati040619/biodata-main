document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();

            // Bersihkan pesan error
            document.getElementById('error-name').innerText = '';
            document.getElementById('error-email').innerText = '';
            document.getElementById('error-phone').innerText = '';
            document.getElementById('error-age').innerText = '';
            document.getElementById('error-messages').innerText = '';
            document.getElementById('form-success').innerText = '';

            // Ambil nilai input
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const age = parseInt(document.getElementById('age').value.trim(), 10);
            const messages = document.getElementById('messages').value.trim();

            let valid = true;

            if (!name) {
                document.getElementById('error-name').innerText = 'Nama tidak boleh kosong.';
                valid = false;
            }
            if (!email.includes('@')) {
                document.getElementById('error-email').innerText = 'Email harus mengandung @.';
                valid = false;
            }
            if (!phone.match(/^[0-9]{10,15}$/)) {
                document.getElementById('error-phone').innerText = 'Nomor telepon harus 10-15 digit angka.';
                valid = false;
            }
            if (isNaN(age) || age < 13) {
                document.getElementById('error-age').innerText = 'Umur minimal 13 tahun.';
                valid = false;
            }
            if (!messages) {
                document.getElementById('error-messages').innerText = 'Pesan tidak boleh kosong.';
                valid = false;
            }

            if (valid) {
                document.getElementById('form-success').innerText = `Halo, ${name}! Terima kasih sudah menghubungi.`;
                document.getElementById('form-success').className = 'success';
                this.reset();
            }
        });

        function setTextareaCols() {
            const textarea = document.getElementById('messages');
            if (!textarea) return;
            if (window.innerWidth <= 600) {
                textarea.setAttribute('cols', 30);
            } else {
                textarea.setAttribute('cols', 50);
            }
        }
        
        window.addEventListener('resize', setTextareaCols);
        window.addEventListener('DOMContentLoaded', setTextareaCols);

        let listTugas = [];

        function tambahTugas() {
            let input = document.getElementById("tugas");
            let tugasBaru = input.value;
            if (tugasBaru.trim() === "") return;

            listTugas.push({ nama: tugasBaru, selesai: false});
            input.value = "";
            renderTugas();
        }
        function renderTugas() {
            let output = "";
            for (let i = 0; i < listTugas.length; i++) {
                let item = listTugas[i];
                output += `<li>
                    ${item.nama} ${item.selesai ? "(OK)" : ""}
                    <button onclick="tandaiSelesai(${i})" ${item .selesai ? "disabled" : ""}>Selesai</button>
                    </li>`;
            }
            document.getElementById("daftar-tugas").innerHTML = output;
        }
        function tandaiSelesai(index) {
           listTugas[index].selesai = true;
           renderTugas(); 
        }
        
        