import jwt from 'jwt-simple';

const generateToken = (id: string) => {
  const payload = {
    id,
    exp: Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60, // Token expires in 30 days
  };
  return jwt.encode(payload, process.env.JWT_SECRET || '');
};



export default generateToken;
