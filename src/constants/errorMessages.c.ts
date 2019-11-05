export const errorMessages = {
    g_UnknownServerError: 'ha ocurrido un error en el servidor',
    s_loginRequired: 'lo que ha intentado requiere que inicie sesión',
    s_adminPrivilegesRequired: 'lo que ha intentado requiere permisos de administrador',
    d_emailAlreadyRegistered: (email: string): string => `la dirección ${email} ya tiene una cuenta registrada`,
    d_emailNotRegistered: (email: string): string => `la dirección ${email} no está asociada a ninguna cuenta`,
    s_invalidCodeProvided: 'el código proporcionado no es válido',
    s_invalidCodeExpired: 'el código proporcionado ha caducado',
    d_accountLocked: (email: string): string => `la cuenta ${email} se encuentra bloqueada`,
    d_errorSendingEmailTo: (email: string): string => `error al intentar enviar email a la dirección ${email}`,
    d_emailNotVerified: (email: string): string =>
        `debe verificar su dirección de email, hemos enviado las instrucciones a ${email}`,
    s_passwordMismatch: 'la contraseña introducida no coincide',
    s_invalidEmail: 'debe introducir una dirección de email válida',
    s_passwordTooShort: 'la contraseña debe contener más de 8 caracteres',
    s_passwordTooLong: 'la contraseña no puede superar los 100 caracteres',
    s_firstnameTooShort: 'su nombre debe tener dos o más caracteres',
    s_firstnameTooLong: 'su nombre no puede exceder los 100 caracteres',
    s_lastnameTooShort: 'sus apellidos en conjunto deben tener más de dos caracteres',
    s_lastnameTooLong: 'sus apellidos no pueden exceder de 255 caracteres',
    s_groupRequestNotNeeded: 'el grupo especificado no necesita solicitud',
    s_groupRequestNotFound: 'la solicitud de grupo no existe o ya ha sido procesada por otro administrador',
    d_groupRequestProcessFailed: `ha ocurrido un error al procesar tu solicitud de grupo, por favor inténtelo más tarde o contacte con el administrador enviando un email a ${process.env.RECIPIENT_WEBMASTER}`
}
