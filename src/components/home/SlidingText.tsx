import './sliding-text.css';

export default function SlidingText() {
  return (
    <>
      <div className="pointer-events-none fixed top-0 -z-20 flex translate-y-[20vh] rotate-6 select-none flex-col overflow-hidden whitespace-nowrap font-bold text-neutral-200">
        <div className="pan" style={{ '--duration': '32s' } as any}>
          Hello Bonjour Hola 你好 Ciao Olá Здравствуйте مرحبا こんにちは
          안녕하세요 ਹੈਲੋ வணக்கம் привет Hallå سلام สวัสดี Բարև Γειά σας Cześć
          नमस्ते გამარჯობა שלום Hej Ahoj ආයුබෝවන් 你好 Hei Olá привет привіт
          Hallå مرحبا नमस्ते Cześć হ্যালো Բարև Χαίρετε हैलो ສະບາຍດີ ਹੈਲੋ مرحبا
          Olá Здравей Καλημέρα ஹலோ ಹಲೋ ሰላም Dag Guten Tag Jambo Dia dhuit Kumusta
          こんにちは Hoi Привет வணக்கம் Здраво నమస్కార ഹലോ Moi Բարև ສະບາຍດີ
          Salut Բարև Labas ಹಲೋ ಸ್ವಾಗತ హలో ਹੈਲੋ Здраво నమస్కార مرحبًا مرحبًا
          Dobar dan Merhaba Hallo Привет Բարև Aloha स्वागत Buon giorno Halló
          Hallå Hallo مرحبا Hej Բարև Halo नमस्ते Ciao வணக்கம் Hoi হ্যালো Բարև
          こんにちは Halo मैत्रीणो Բարև Χαίρετε Ողջույն નમસ્કાર გამარჯობა
          வணக்கம் હલો مرحبا ഹലോ আসসালামু আলাইকুম 您好 Здраво నమస్కార שלום
          Βραβείο कोन निहाओ 你好
        </div>
        <div className="pan" style={{ '--duration': '29s' } as any}>
          Olá Здравствуйте مرحبا こんにちは 안녕하세요 ਹੈਲੋ வணக்கம் привет Hallå
          سلام สวัสดี Բարև Γειά σας Cześć नमस्ते გამარჯობა שלום Hej Ahoj
          ආයුබෝවන් 你好 Hei Olá привет привіт Hallå مرحبا नमस्ते Cześć হ্যালো
          Բարև Χαίρετε हैलो ສະບາຍດີ ਹੈਲੋ مرحبا Olá Здравей Καλημέρα ஹலோ ಹಲೋ ሰላም
          Dag Guten Tag Jambo Dia dhuit Kumusta こんにちは Hoi Привет வணக்கம்
          Здраво నమస్కార ഹലോ Moi Բարև ສະບາຍດີ Salut Բարև Labas ಹಲೋ ಸ್ವಾಗತ హలో
          ਹੈਲੋ Здраво నమస్కార مرحبًا مرحبًا Dobar dan Merhaba Hallo Привет Բարև
          Aloha स्वागत Buon giorno Halló Hallå Hallo مرحبا Hej Բարև Halo नमस्ते
          Ciao வணக்கம் Hoi হ্যালো Բարև こんにちは Halo मैत्रीणो Բարև Χαίρετε
          Ողջույն નમસ્કાર გამარჯობა வணக்கம் હલો مرحبا ഹലോ আসসালামু আলাইকুম 您好
          Здраво నమస్కార שלום Βραβείο कोन निहाओ 你好 Hello Bonjour Hola 你好
          Ciao
        </div>
        <div className="pan" style={{ '--duration': '28s' } as any}>
          வணக்கம் привет Hallå سلام สวัสดี Բարև Γειά σας Cześć नमस्ते გამარჯობა
          שלום Hej Ahoj ආයුබෝවන් 你好 Hei Olá привет привіт Hallå مرحبا नमस्ते
          Cześć হ্যালো Բարև Χαίρετε हैलो ສະບາຍດີ ਹੈਲੋ مرحبا Olá Здравей Καλημέρα
          ஹலோ ಹಲೋ ሰላም Dag Guten Tag Jambo Dia dhuit Kumusta こんにちは Hoi
          Привет வணக்கம் Здраво నమస్కార ഹലോ Moi Բարև ສະບາຍດີ Salut Բարև Labas
          ಹಲೋ ಸ್ವಾಗತ హలో ਹੈਲੋ Здраво నమస్కార مرحبًا مرحبًا Dobar dan Merhaba
          Hallo Привет Բարև Aloha स्वागत Buon giorno Halló Hallå Hallo مرحبا Hej
          Բարև Halo नमस्ते Ciao வணக்கம் Hoi হ্যালো Բարև こんにちは Halo मैत्रीणो
          Բարև Χαίρετε Ողջույն નમસ્કાર გამარჯობა வணக்கம் હલો مرحبا ഹലോ আসসালামু
          আলাইকুম 您好 Здраво నమస్కార שלום Βραβείο कोन निहाओ 你好 Hello Bonjour
          Hola 你好 Ciao Olá Здравствуйте مرحبا こんにちは 안녕하세요 ਹੈਲੋ
        </div>
        <div className="pan" style={{ '--duration': '30s' } as any}>
          σας Cześć नमस्ते გამარჯობა שלום Hej Ahoj ආයුබෝවන් 你好 Hei Olá привет
          привіт Hallå مرحبا नमस्ते Cześć হ্যালো Բարև Χαίρετε हैलो ສະບາຍດີ ਹੈਲੋ
          مرحبا Olá Здравей Καλημέρα ஹலோ ಹಲೋ ሰላም Dag Guten Tag Jambo Dia dhuit
          Kumusta こんにちは Hoi Привет வணக்கம் Здраво నమస్కార ഹലോ Moi Բարև
          ສະບາຍດີ Salut Բարև Labas ಹಲೋ ಸ್ವಾಗತ హలో ਹੈਲੋ Здраво నమస్కార مرحبًا
          مرحبًا Dobar dan Merhaba Hallo Привет Բարև Aloha स्वागत Buon giorno
          Halló Hallå Hallo مرحبا Hej Բարև Halo नमस्ते Ciao வணக்கம் Hoi হ্যালো
          Բարև こんにちは Halo मैत्रीणो Բարև Χαίρετε Ողջույն નમસ્કાર გამარჯობა
          வணக்கம் હલો مرحبا ഹലോ আসসালামু আলাইকুম 您好 Здраво నమస్కార שלום
          Βραβείο कोन निहाओ 你好 Hello Bonjour Hola 你好 Ciao Olá Здравствуйте
          مرحبا こんにちは 안녕하세요 ਹੈਲੋ வணக்கம் привет Hallå سلام สวัสดี Բարև
          Γειά
        </div>
        <div className="pan" style={{ '--duration': '34s' } as any}>
          ආයුබෝවන් 你好 Hei Olá привет привіт Hallå مرحبا नमस्ते Cześć হ্যালো
          Բարև Χαίρετε हैलो ສະບາຍດີ ਹੈਲੋ مرحبا Olá Здравей Καλημέρα ஹலோ ಹಲೋ ሰላም
          Dag Guten Tag Jambo Dia dhuit Kumusta こんにちは Hoi Привет வணக்கம்
          Здраво నమస్కార ഹലോ Moi Բարև ສະບາຍດີ Salut Բարև Labas ಹಲೋ ಸ್ವಾಗತ హలో
          ਹੈਲੋ Здраво నమస్కార مرحبًا مرحبًا Dobar dan Merhaba Hallo Привет Բարև
          Aloha स्वागत Buon giorno Halló Hallå Hallo مرحبا Hej Բարև Halo नमस्ते
          Ciao வணக்கம் Hoi হ্যালো Բարև こんにちは Halo मैत्रीणो Բարև Χαίρετε
          Ողջույն નમસ્કાર გამარჯობა வணக்கம் હલો مرحبا ഹലോ আসসালামু আলাইকুম 您好
          Здраво నమస్కార שלום Βραβείο कोन निहाओ 你好 Hello Bonjour Hola 你好
          Ciao Olá Здравствуйте مرحبا こんにちは 안녕하세요 ਹੈਲੋ வணக்கம் привет
          Hallå سلام สวัสดี Բարև Γειά σας Cześć नमस्ते გამარჯობა שלום Hej Ahoj
        </div>
        <div className="pan" style={{ '--duration': '32s' } as any}>
          مرحبا नमस्ते Cześć হ্যালো Բարև Χαίρετε हैलो ສະບາຍດີ ਹੈਲੋ مرحبا Olá
          Здравей Καλημέρα ஹலோ ಹಲೋ ሰላም Dag Guten Tag Jambo Dia dhuit Kumusta
          こんにちは Hoi Привет வணக்கம் Здраво నమస్కార ഹലോ Moi Բարև ສະບາຍດີ
          Salut Բարև Labas ಹಲೋ ಸ್ವಾಗತ హలో ਹੈਲੋ Здраво నమస్కార مرحبًا مرحبًا
          Dobar dan Merhaba Hallo Привет Բարև Aloha स्वागत Buon giorno Halló
          Hallå Hallo مرحبا Hej Բարև Halo नमस्ते Ciao வணக்கம் Hoi হ্যালো Բարև
          こんにちは Halo मैत्रीणो Բարև Χαίρετε Ողջույն નમસ્કાર გამარჯობა
          வணக்கம் હલો مرحبا ഹലോ আসসালামু আলাইকুম 您好 Здраво నమస్కార שלום
          Βραβείο कोन निहाओ 你好 Hello Bonjour Hola 你好 Ciao Olá Здравствуйте
          مرحبا こんにちは 안녕하세요 ਹੈਲੋ வணக்கம் привет Hallå سلام สวัสดี Բարև
          Γειά σας Cześć नमस्ते გამარჯობა שלום Hej Ahoj ආයුබෝවන් 你好 Hei Olá
          привет привіт Hallå
        </div>
        <div className="pan" style={{ '--duration': '28s' } as any}>
          مرحبا Olá Здравей Καλημέρα ஹலோ ಹಲೋ ሰላም Dag Guten Tag Jambo Dia dhuit
          Kumusta こんにちは Hoi Привет வணக்கம் Здраво నమస్కార ഹലോ Moi Բարև
          ສະບາຍດີ Salut Բարև Labas ಹಲೋ ಸ್ವಾಗತ హలో ਹੈਲੋ Здраво నమస్కార مرحبًا
          مرحبًا Dobar dan Merhaba Hallo Привет Բարև Aloha स्वागत Buon giorno
          Halló Hallå Hallo مرحبا Hej Բարև Halo नमस्ते Ciao வணக்கம் Hoi হ্যালো
          Բարև こんにちは Halo मैत्रीणो Բարև Χαίρετε Ողջույն નમસ્કાર გამარჯობა
          வணக்கம் હલો مرحبا ഹലോ আসসালামু আলাইকুম 您好 Здраво నమస్కార שלום
          Βραβείο कोन निहाओ 你好 Hello Bonjour Hola 你好 Ciao Olá Здравствуйте
          مرحبا こんにちは 안녕하세요 ਹੈਲੋ வணக்கம் привет Hallå سلام สวัสดี Բարև
          Γειά σας Cześć नमस्ते გამარჯობა שלום Hej Ahoj ආයුබෝවන් 你好 Hei Olá
          привет привіт Hallå مرحبا नमस्ते Cześć হ্যালো Բարև Χαίρετε हैलो
          ສະບາຍດີ ਹੈਲੋ
        </div>
        <div className="pan" style={{ '--duration': '30s' } as any}>
          Kumusta こんにちは Hoi Привет வணக்கம் Здраво నమస్కార ഹലോ Moi Բարև
          ສະບາຍດີ Salut Բարև Labas ಹಲೋ ಸ್ವಾಗತ హలో ਹੈਲੋ Здраво నమస్కార مرحبًا
          مرحبًا Dobar dan Merhaba Hallo Привет Բարև Aloha स्वागत Buon giorno
          Halló Hallå Hallo مرحبا Hej Բարև Halo नमस्ते Ciao வணக்கம் Hoi হ্যালো
          Բարև こんにちは Halo मैत्रीणो Բարև Χαίρετε Ողջույն નમસ્કાર გამარჯობა
          வணக்கம் હલો مرحبا ഹലോ আসসালামু আলাইকুম 您好 Здраво నమస్కార שלום
          Βραβείο कोन निहाओ 你好 Hello Bonjour Hola 你好 Ciao Olá Здравствуйте
          مرحبا こんにちは 안녕하세요 ਹੈਲੋ வணக்கம் привет Hallå سلام สวัสดี Բարև
          Γειά σας Cześć नमस्ते გამარჯობა שלום Hej Ahoj ආයුබෝවන් 你好 Hei Olá
          привет привіт Hallå مرحبا नमस्ते Cześć হ্যালো Բարև Χαίρετε हैलो
          ສະບາຍດີ ਹੈਲੋ مرحبا Olá Здравей Καλημέρα ஹலோ ಹಲೋ ሰላም Dag Guten Tag
          Jambo Dia dhuit
        </div>
        <div className="pan" style={{ '--duration': '35s' } as any}>
          ສະບາຍດີ Salut Բարև Labas ಹಲೋ ಸ್ವಾಗತ హలో ਹੈਲੋ Здраво నమస్కార مرحبًا
          مرحبًا Dobar dan Merhaba Hallo Привет Բարև Aloha स्वागत Buon giorno
          Halló Hallå Hallo مرحبا Hej Բարև Halo नमस्ते Ciao வணக்கம் Hoi হ্যালো
          Բարև こんにちは Halo मैत्रीणो Բարև Χαίρετε Ողջույն નમસ્કાર გამარჯობა
          வணக்கம் હલો مرحبا ഹലോ আসসালামু আলাইকুম 您好 Здраво నమస్కార שלום
          Βραβείο कोन निहाओ 你好 Hello Bonjour Hola 你好 Ciao Olá Здравствуйте
          مرحبا こんにちは 안녕하세요 ਹੈਲੋ வணக்கம் привет Hallå سلام สวัสดี Բարև
          Γειά σας Cześć नमस्ते გამარჯობა שלום Hej Ahoj ආයුබෝවන් 你好 Hei Olá
          привет привіт Hallå مرحبا नमस्ते Cześć হ্যালো Բարև Χαίρετε हैलो
          ສະບາຍດີ ਹੈਲੋ مرحبا Olá Здравей Καλημέρα ஹலோ ಹಲೋ ሰላም Dag Guten Tag
          Jambo Dia dhuit Kumusta こんにちは Hoi Привет வணக்கம் Здраво నమస్కార
          ഹലോ Moi Բարև
        </div>
      </div>
    </>
  );
}
