const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const adminEmail = functions.config().admin.email;

// 送信に使用するメールサーバーの設定
const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: gmailEmail,
        pass: gmailPassword
    }
});

// お問い合わせのメールテンプレート
const adminContents = data => {
return `${data.name}さん

NISLAB 佐藤研究室です。

以下の内容でお問い合わせを受け付けました。
追って回答させていただきますのでお待ちください。


お名前：
${data.name}

学籍番号：
${data.studentId}

メールアドレス：
${data.email}

内容：
${data.message}


不明点等ありましたら、下記のメールアドレスまでご連絡ください。
以上、今後ともよろしくお願いいたします。

*** このメールは学生が管理しています ***
------------------------------------------------------
同志社大学大学院 理工学研究科 情報工学専攻
同志社大学 理工学部 情報システムデザイン学科
ネットワーク情報システム研究室(NISLAB) 佐藤研究室
Email: nislab.sato@gmail.com
Address: 恵喜館101号室 (KE-101)
------------------------------------------------------
`;
};

exports.sendContact = functions.https.onCall(async (data) => {
    let email = {
        from: gmailEmail,
        to: data.email,
        cc: gmailEmail,
        bcc: adminEmail,
        subject: '【NISLAB】お問い合わせを受け付けました',
        text: adminContents(data),
    }
    await mailTransport.sendMail(email, (err) => {
        if (err) {
            return console.log(err)
        }
        return console.log('success')
    })
})

// 予約完了のメールテンプレート
const adminReservations = data => {
return `${data.name}さん

NISLAB 佐藤研究室です。

以下の日時で研究室訪問の予約を受け付けました。
追って詳細に関するメールを送信させていただきますのでお待ちください。


お名前：
${data.name}

学籍番号：
${data.studentId}

メールアドレス：
${data.email}

日時：
${data.date} ${data.time}

補足事項：
${data.message}


都合が合わなくなった場合など、予約をキャンセル/時間変更したい方はマイページよりお手続きください。

不明点等ありましたら、下記のメールアドレスまでご連絡ください。
以上、今後ともよろしくお願いいたします。

*** このメールは学生が管理しています ***
------------------------------------------------------
同志社大学大学院 理工学研究科 情報工学専攻
同志社大学 理工学部 情報システムデザイン学科
ネットワーク情報システム研究室(NISLAB) 佐藤研究室
Email: nislab.sato@gmail.com
Address: 恵喜館101号室 (KE-101)
------------------------------------------------------
`;
};

exports.sendReservation = functions.https.onCall(async (data) => {
    let email = {
        from: gmailEmail,
        to: data.email,
        cc: gmailEmail,
        bcc: adminEmail,
        subject: '【NISLAB】研究室訪問の予約が完了しました',
        text: adminReservations(data),
    }
    await mailTransport.sendMail(email, (err) => {
        if (err) {
            return console.log(err)
        }
        return console.log('success')
    })
})
