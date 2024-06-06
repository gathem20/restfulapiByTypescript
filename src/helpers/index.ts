import crypto from "crypto"
const secret = 'gathem'
export const random = ()=> crypto.randomBytes(128).toString('base64')
export const authentication = (salt:string , password :string |number) =>{
    return crypto.createHmac('sha256', [salt , password].join('./')).update(secret).digest()
}