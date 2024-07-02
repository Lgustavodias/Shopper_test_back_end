export default function getValidationCodeEmailHtml(code: string, name: string) {
  return `
    <!doctype html>
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office">
    
    <head>
      <title></title><!--[if !mso]><!-->
      <meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <style type="text/css">
        #outlook a {
          padding: 0;
        }
    
        body {
          margin: 0;
          padding: 0;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
    
        table,
        td {
          border-collapse: collapse;
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
        }
    
        img {
          border: 0;
          height: auto;
          line-height: 100%;
          outline: none;
          text-decoration: none;
          -ms-interpolation-mode: bicubic;
        }
    
        p {
          display: block;
          margin: 13px 0;
        }
      </style><!--[if mso]>
    <noscript>
    <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    </noscript>
    <![endif]--><!--[if lte mso 11]>
    <style type="text/css">
      .mj-outlook-group-fix { width:100% !important; }
    </style>
    <![endif]--><!--[if !mso]><!-->
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" type="text/css">
      <style type="text/css">
        @import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,700);
      </style><!--<![endif]-->
      <style type="text/css">
        @media only screen and (min-width:480px) {
          .mj-column-per-14-285714285714286 {
            width: 14.285714285714286% !important;
            max-width: 14.285714285714286%;
          }
    
          .mj-column-per-100 {
            width: 100% !important;
            max-width: 100%;
          }
    
          .mj-column-per-33-333333333333336 {
            width: 33.333333333333336% !important;
            max-width: 33.333333333333336%;
          }
        }
      </style>
      <style media="screen and (min-width:480px)">
        .moz-text-html .mj-column-per-14-285714285714286 {
          width: 14.285714285714286% !important;
          max-width: 14.285714285714286%;
        }
    
        .moz-text-html .mj-column-per-100 {
          width: 100% !important;
          max-width: 100%;
        }
    
        .moz-text-html .mj-column-per-33-333333333333336 {
          width: 33.333333333333336% !important;
          max-width: 33.333333333333336%;
        }
      </style>
      <style type="text/css">
        @media only screen and (max-width:480px) {
          table.mj-full-width-mobile {
            width: 100% !important;
          }
    
          td.mj-full-width-mobile {
            width: auto !important;
          }
        }
      </style>
    </head>
    
    <body style="word-spacing:normal;background-color:#FFFFFF;">
      <div style="background-color:#FFFFFF;">
        <div class="mj-column-per-14-285714285714286 mj-outlook-group-fix"
          style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
          <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
            <tbody>
              <tr>
                <td style="vertical-align:top;padding-top:24px;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                    <tbody></tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
        <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
            style="background:#ffffff;background-color:#ffffff;width:100%;">
            <tbody>
              <tr>
                <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                  <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
                  <div class="mj-column-per-100 mj-outlook-group-fix"
                    style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;"
                      width="100%">
                      <tbody>
                        <tr>
                          <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                              style="border-collapse:collapse;border-spacing:0px;">
                              <tbody>
                                <tr>
                                  <td style="width:550px;"><img height="auto" src="https://i.imgur.com/XeLjewC.png"
                                      style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;"
                                      title="logo" width="550"></td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div><!--[if mso | IE]></td></tr></table><![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#FFFFFF" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
        <div style="background:#FFFFFF;background-color:#FFFFFF;margin:0px auto;max-width:600px;">
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
            style="background:#FFFFFF;background-color:#FFFFFF;width:100%;">
            <tbody>
              <tr>
                <td style="direction:ltr;font-size:0px;padding:0 0 0 0;text-align:center;">
                  <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
                  <div class="mj-column-per-100 mj-outlook-group-fix"
                    style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                      <tbody>
                        <tr>
                          <td style="vertical-align:top;padding:12px 48px 72px 12px;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tbody>
                                <tr>
                                  <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                    <div
                                      style="font-family:Roboto,'Work Sans',Arial,sans-serif;font-size:24px;font-weight:400;letter-spacing:0.15px;line-height:22px;text-align:left;color:#000000;">
                                      <p>Olá, <b style="color:#E25D0C;font-weight:600">${name}</b></p>
                                      <p></p>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td align="left"
                                    style="font-size:0px;padding:10px 25px;padding-top:12px;padding-bottom:0px;word-break:break-word;">
                                    <div
                                      style="font-family:Roboto,'Work Sans',sans-serif;font-size:18px;font-weight:400;line-height:24px;text-align:left;color:#000000;">
                                      Recebemos uma solicitação de recuperação de senha para a sua conta. Para continuar,
                                      utilize o seguinte código de verificação:<br></div>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="font-size:0px;padding:20px 0;word-break:break-word;">
                                    <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:540px;" width="540" bgcolor="#FFF1E9" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                                    <div
                                      style="background:#FFF1E9;background-color:#FFF1E9;margin:0px auto;max-width:540px;">
                                      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                                        style="background:#FFF1E9;background-color:#FFF1E9;width:100%;">
                                        <tbody>
                                          <tr>
                                            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                                              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td align="center" class="" style="" ><![endif]-->
                                              <div style="font-family:Roboto,'Work Sans',sans-serif;font-size:18px;font-weight:400;line-height:16px;text-align:center;color:
    #232326;">Código de alteração de senha<br><br></div>
                                              <!--[if mso | IE]></td><td align="center" class="" style="" ><![endif]-->
                                              <div
                                                style="font-family:Roboto,'Work Sans',sans-serif;font-size:24px;font-weight:500;letter-spacing:8px;line-height:24px;text-align:center;color:#E25D0C;">
                                                ${code}<br></div><!--[if mso | IE]></td></tr></table><![endif]-->
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div><!--[if mso | IE]></td></tr></table><![endif]-->
                                  </td>
                                </tr>
                                <tr>
                                  <td align="left"
                                    style="font-size:0px;padding:10px 25px;padding-top:12px;padding-bottom:0px;word-break:break-word;">
                                    <div
                                      style="font-family:Roboto,'Work Sans',sans-serif;font-size:18px;font-weight:400;line-height:24px;text-align:left;color:#000000;">
                                      Se você não solicitou alteração de senha, ignore este e-mail.<br></div>
                                  </td>
                                </tr>
                                <tr>
                                  <td align="left"
                                    style="font-size:0px;padding:10px 25px;padding-top:12px;padding-bottom:0px;word-break:break-word;">
                                    <div
                                      style="font-family:Roboto,'Work Sans',sans-serif;font-size:18px;font-weight:400;line-height:24px;text-align:left;color:#000000;">
                                      Este código expira em 2h.<br></div>
                                  </td>
                                </tr>
                                <tr>
                                  <td align="left"
                                    style="font-size:0px;padding:10px 25px;padding-top:12px;padding-bottom:0px;word-break:break-word;">
                                    <div
                                      style="font-family:Roboto,'Work Sans',sans-serif;font-size:18px;font-weight:400;line-height:24px;text-align:left;color:#000000;">
                                      Atenciosamente,<br><b style="color:#E25D0C;font-weight:600">Equipe Recycle Din</b>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div><!--[if mso | IE]></td></tr></table><![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#E5E5E5" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
        <div style="background:#E5E5E5;background-color:#E5E5E5;margin:0px auto;max-width:600px;">
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
            style="background:#E5E5E5;background-color:#E5E5E5;width:100%;">
            <tbody>
              <tr>
                <td style="direction:ltr;font-size:0px;padding:24px 48px 24px 48px;text-align:center;">
                  <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td align="center" class="" style="" ><![endif]-->
                  <div
                    style="font-family:Roboto,'Work Sans',sans-serif;font-size:20px;font-weight:600;line-height:24px;text-align:center;color:#000000;">
                    <b style="color:#E25D0C;font-weight:600">Baixe agora mesmo o app Recycle Din</b></div>
                  <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:168px;" ><![endif]-->
                  <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix"
                    style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;"
                      width="100%">
                      <tbody>
                        <tr>
                          <td align="center"
                            style="font-size:0px;padding:10px 25px;padding-top:13px;word-break:break-word;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                              style="border-collapse:collapse;border-spacing:0px;">
                              <tbody>
                                <tr>
                                  <td style="width:118px;"><img height="auto"
                                      src="https://logodownload.org/wp-content/uploads/2017/05/disponivel-na-app-store-botao-8.png"
                                      style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;"
                                      title="app-store" width="118"></td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div><!--[if mso | IE]></td><td class="" style="vertical-align:top;width:168px;" ><![endif]-->
                  <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix"
                    style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;"
                      width="100%">
                      <tbody>
                        <tr>
                          <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                              style="border-collapse:collapse;border-spacing:0px;">
                              <tbody>
                                <tr>
                                  <td style="width:118px;"><img height="auto"
                                      src="https://play.google.com/intl/pt-BR/badges/static/images/badges/pt-br_badge_web_generic.png"
                                      style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;"
                                      title="google-play" width="118"></td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div><!--[if mso | IE]></td></tr></table><![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
        </div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="
    #E25D0C" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
        <div style="background:
    #E25D0C;background-color:
    #E25D0C;margin:0px auto;max-width:600px;">
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:
    #E25D0C;background-color:
    #E25D0C;width:100%;">
            <tbody>
              <tr>
                <td style="direction:ltr;font-size:0px;padding:8px;text-align:center;">
                  <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr></tr></table><![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#FFF8F3" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
        <div style="background:#FFF8F3;background-color:#FFF8F3;margin:0px auto;max-width:600px;">
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
            style="background:#FFF8F3;background-color:#FFF8F3;width:100%;">
            <tbody>
              <tr>
                <td style="direction:ltr;font-size:0px;padding:0 0 0 0;text-align:center;">
                  <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
                  <div class="mj-column-per-100 mj-outlook-group-fix"
                    style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                      <tbody>
                        <tr>
                          <td style="vertical-align:top;padding:24px 48px 24px 48px;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tbody>
                                <tr>
                                  <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                    <div
                                      style="font-family:Roboto,'Work Sans',sans-serif;font-size:22px;font-style:normal;font-weight:400;line-height:28px;text-align:left;color:#000000;">
                                      <b>Equipe Recycle Din</b></div>
                                  </td>
                                </tr>
                                <tr>
                                  <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                    <div
                                      style="font-family:Roboto,'Work Sans',sans-serif;font-size:16px;font-style:normal;font-weight:400;line-height:24px;text-align:left;color:#000000;">
                                      Essa é uma mensagem gerada automaticamente, por favor, não responda esse e-mail.</div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div><!--[if mso | IE]></td></tr></table><![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
        <div style="margin:0px auto;max-width:600px;">
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
            <tbody>
              <tr>
                <td style="direction:ltr;font-size:0px;padding:24px;text-align:center;">
                  <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr></tr></table><![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
        </div><!--[if mso | IE]></td></tr></table><![endif]-->
      </div>
    </body>
    
    </html>`
}
