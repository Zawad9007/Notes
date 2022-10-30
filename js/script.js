const add = document.querySelector('#add')
const main = document.querySelector('#main')

const savenotes = () => {
    const notes = document.querySelectorAll('.note textarea');
    
    const data = []
    notes.forEach(
        (note) => {
            data.push(note.value)

        }
    )
    if (data.length === 0) {
        localStorage.removeItem('notes')
    }
    else{
        localStorage.setItem('notes', JSON.stringify(data))

    }
    console.log(notes);
    // console.log(data)
}


add.addEventListener(
    'click',
    function () {
        addnode()
    })


    
const addnode = (text = '') => {
    const note = document.createElement('div')
    note.classList.add('note')
    note.innerHTML =
        `
            <div class="tool">
                <i class="save fa-solid fa-floppy-disk"></i>
                <i class="tras fa-sharp fa-solid fa-trash"></i>
            </div>
            <textarea>${text}</textarea>
        
    `
    note.querySelector('.tras').addEventListener(
        'click',
        function () {
            note.remove()
            savenotes()
        }
    )
    note.querySelector('.save').addEventListener(
        'click',
        function () {
            savenotes()
        }
    )
    note.querySelector('textarea').addEventListener('focusout',function () {
        savenotes()
    })
    main.appendChild(note)
    savenotes()
} 
(
    function () {
        const lsnotes = JSON.parse(localStorage.getItem('notes'))
        console.log(lsnotes);
       
        if(lsnotes == null){
            addnode()
        }
        else{
            lsnotes.forEach(
                (lsnotes) => {
                    addnode(lsnotes)
                }
            )
        }
    }
)()
