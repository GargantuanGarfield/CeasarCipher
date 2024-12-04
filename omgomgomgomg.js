//nabbing the form and then waiting for it to be submitted (also defining my constant for the alphabet)
let form = document.forms[0]
const alpha = 'abcdefghijklmnopqrstuvwxyz'

form.addEventListener('submit', function (e) {
    //preventing the form from submitting, so we can do our encrypting and stuff.
    e.preventDefault()

    //also gonna nab the relevant data from the form (text, shift value that kind of stuff)
    let input = form["text"].value.toLowerCase()
    let shift = parseInt(form["shift"].value)
    let dir = form["direction"].value
    let select = form["switcher"].value
    

    //Now we check for encrypt or decrypt, sos the shift value can be set appropriately
    if (dir == "left") {
        shift = -shift
        if (select == "dec") {
            shift = -shift
        }
    } else {
        if (select == "dec") {
            shift = -shift
        }
    }

    //Now, the encrypt/decryption begins

    //This will be our output String
    let result = ""
    for (let i=0; i<input.length; i++) {
        
        // This will go letter by letter in the input, find the index in the alphabet for the letter, apply the shift, then append it 
        let letter = input[i]

        //Checking if the letter is a letter, then proceeding accordingly : Applying shift or just sendding it to the result string
        if (!alpha.includes(letter)) {
            result += letter
            continue
        } else {
            let index = alpha.indexOf(letter)
            
            //before the number is just sent, we have to make sure it is within the scope of the alphabet
            //and if it isnt, to make it so
            if (shift > 25 || shift < -25) {
                shift = parseInt(shift % 26)
            }
            
            //now we apply the shift, and check if valid again, and THEN send it to the result string
            index += shift
            if (index > 25 || index < -25) {
                index = index % 26
            }


            let newletter = alpha.at(index)
            result += newletter
        }
    }

    //now we output the string
    let output = document.getElementById('result')
    output.textContent = result
})