export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold">م</div>
              <span className="font-bold text-xl text-white">مجد الاصالة</span>
            </div>
            <p className="max-w-md text-slate-400 leading-relaxed">
              شريكك الموثوق في جدة للمقاولات العامة، الصيانة، وأنظمة التبريد والتكييف. نلتزم بأعلى معايير الجودة والسلامة.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-primary transition-colors">الرئيسية</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">من نحن</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">خدماتنا</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">تواصل معنا</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">تواصل معنا</h4>
            <ul className="space-y-2 text-sm">
              <li>جدة، المملكة العربية السعودية</li>
              <li dir="ltr">055 148 9385</li>
              <li>info@majdalasalh.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} مؤسسة مجد الاصالة. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
