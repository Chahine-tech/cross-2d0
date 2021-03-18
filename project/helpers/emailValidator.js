export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email || email.length <= 0) return "Vous devez renseigner votre e-mail"
  if (!re.test(email)) return 'Vous devez renseigner une addresse e-mail valide'
  return ''
}
