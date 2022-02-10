import { Dashboards } from '../DataBase/Admin';

export function signIn({ email, password }) {
  const NguoiDung = Dashboards.find(NguoiDung => NguoiDung.email === email && NguoiDung.password === password);
  if (NguoiDung === undefined) throw new Error();
  return NguoiDung;
}