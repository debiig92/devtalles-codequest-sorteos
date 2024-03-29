import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../../mongo";
import { bcryptAdapter } from "../../config";
import { jwtAdapter } from "../../config/jwt.adapter";

//METODO QUE ME PERMITE logear EL USUARIO
export async function POST(request) {
  const { email, password } = await request.json();

  const emailExist = await prisma.usuario.findUnique({
    where: {
      email: email,
    },
  });
  if (!emailExist)
    return NextResponse.json(
      {
        error: "El usuario o la contraseña son incorrectos-correo",
      },
      { status: 400 }
    );

  const passwordUnhashed = await bcryptAdapter.compare(password, emailExist.password);
  if (!passwordUnhashed)
    return NextResponse.json(
      {
        error: "El usuario o la contraseña son incorrectos-password",
      },
      { status: 400 }
    );

  const token = await jwtAdapter.generateToken(emailExist.email);

  const response = NextResponse.json(emailExist.email);

  response.cookies.set("token", token);
  return response;
}
