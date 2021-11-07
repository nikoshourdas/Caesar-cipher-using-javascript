//η ασκηση ειναι φτιαγμενη να δουλευει με μυνημα σε ελληνικο αλφαβητο 
// μεσα σε comment ομως ειναι λυση η οποια λειτουργει σε λατινικο/Αγγλικο Αλφαβητο 

const alphabet = 
        ['Α','Β','Γ','Δ','Ε','Ζ','Η','Θ','Ι','Κ','Λ',
        'Μ','Ν','Ξ','Ο','Π','Ρ','Σ','Τ','Υ','Φ','Χ',
        'Ψ','Ω']

        const alphabetEnglish = 
        ['A','B','C','D','E','F','G','H','I','J','K',
        'L','M','N','O','P','Q','R','S','T','U','V',
        'W','X','Y','Z']

        const maxlength = alphabet.length


        const EncodeCaesar = (text, rot) => {
          if (rot > maxlength || rot < 0) {
            throw Error('No clue whats going on')
          }
        text = Array.from(text)
          const encryptedText = text.map((char) => {
            const idx = alphabet.indexOf(char.toUpperCase())
            if (idx === -1) {
              return char
            }
            const encryptedIdx = (idx + rot) % maxlength
            const encryptedChar = alphabet[encryptedIdx]
            const encrypted_text= encryptedChar.toUpperCase() 
            return encrypted_text
          })
        return encryptedText.join('')
      }


      const DecodeCeasar = (text, rot) => {
        if (rot > maxlength || rot < 0) {
          throw Error('Sorry no decrypt')
        }
        text = Array.from(text)
        const decryptedText = text.map((char) => {
          const idx = alphabet.indexOf(char.toUpperCase())
          if (idx === -1) {
            return char
          }
          let decryptedIdx = (idx - rot) % maxlength
          decryptedIdx = decryptedIdx < 0 ? decryptedIdx + maxlength : decryptedIdx
          const decryptedChar = alphabet[decryptedIdx]
          return  decryptedChar
        })
        return decryptedText.join('')
      }
      let textinput='δωσε μου τα μπισκοτα'
      let input=5; //make this changable 
      let encrypted;


      console.log(input)
      console.log(encrypted=EncodeCaesar(textinput,input))
      console.log(DecodeCeasar(encrypted,input))

//-------------------------------------------------------------------------------------------------------------------
// const maxlength = alphabetEnglish.length


// const EncodeCaesar = (text, rot) => {
// 	if (rot > maxlength || rot < 0) {
// 		throw Error('No idea sorry')
// 	}
// 	text = Array.from(text)
// 	const encryptedText = text.map((char) => {
// 		const idx = alphabetEnglish.indexOf(char.toUpperCase())
// 		if (idx === -1) {
// 		return char
// 		}
// 		const encryptedIdx = (idx + rot) % maxlength
// 		const encryptedChar = alphabetEnglish[encryptedIdx]
// 		const encrypted_text= encryptedChar.toUpperCase() 
// 		return encrypted_text
// 	})
// 	return encryptedText.join('')
// }


// const DecodeCeasar = (text, rot) => {
// if (rot > maxlength || rot < 0) {
//   throw Error('Sorry no decrypt')
// }
// text = Array.from(text)
// const decryptedText = text.map((char) => {
//   const idx = alphabetEnglish.indexOf(char.toUpperCase())
//   if (idx === -1) {
// 	return char
//   }
//   let decryptedIdx = (idx - rot) % maxlength
//   decryptedIdx = decryptedIdx < 0 ? decryptedIdx + maxlength : decryptedIdx
//   const decryptedChar = alphabetEnglish[decryptedIdx]
//   return  decryptedChar
// })
// return decryptedText.join('')
// }
// let textinput='give me cookies'
// let input=5; //make this changable 
// let encrypted;


// console.log(input)
// console.log(encrypted=EncodeCaesar(textinput,input))
// console.log(DecodeCeasar(encrypted,input))





