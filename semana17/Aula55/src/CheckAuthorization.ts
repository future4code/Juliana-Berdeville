import * as jwt from 'jsonwebtoken'

export class CheckAuthorization 
{

  private static EXPIRES_IN = '3min'

  public generateToken(input: Auth): string 
  {
        const token = jwt.sign
        (
            {id: input.id,},
            process.env.JWT_KEY as string,
            {expiresIn: CheckAuthorization.EXPIRES_IN,}
        );
    
        return token;
  }
}

interface Auth
{
  id: string
}