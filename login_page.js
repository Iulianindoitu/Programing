const showHiddenPass = (inputPass, inputIcon) => {
    const input = document.getElementById(inputPass),
        iconEye = document.getElementById(inputIcon)

    iconEye.addEventListener('click', () =>{
        //change
        if(input.type === 'password'){
            input.type = 'text'

// add icon
            iconEye.classList.add('ri-eye-line')
            //rermove icon
            iconEye.classList.remove('ri-eye-off-line')
        } else{
            //change password
            input.type = 'password'
        }
    })

}

showHiddenPass('input-pass','input-icon')