export const requestTime = ()=>{
  const date = new Date();
  return date.toISOString();
}

export const generateSignature = ()=>{
 
  let generatedSignature=base64UrlEncode(sha256withrsa(),1)
} 