const GenPw = document.getElementById("gen-pw")
const CopyPw = document.getElementById("copy-pw")
const PwContainer = document.getElementById("password")

GenPw.addEventListener("click", () => {
   let chars =
      "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
   let pwLength = 12
   let password = ""

   const array = new Uint32Array(chars.length)
   window.crypto.getRandomValues(array)

   for (let i = 0; i < pwLength; i++) {
      password += chars[array[i] % chars.length]
   }

   PwContainer.value = password
})

CopyPw.addEventListener("click", () => {
   PwContainer.select()
   document.execCommand("copy")
})
