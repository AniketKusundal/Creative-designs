document.querySelectorAll('.story-btn').forEach(btn => {
    btn.addEventListener('click',()=>{
        btn.classList.toggle('Change')
        btn.nextElementSibling.classList.toggle('change')
    })
    

})

