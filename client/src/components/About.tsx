import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-xl transform rotate-3" />
              <div className="relative bg-slate-900 rounded-xl p-8 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-2xl font-bold mb-4">لماذا تختار مجد الاصالة؟</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  نحن نفخر بتقديم خدمات عالية الجودة في جدة، معتمدين على فريق من الخبراء والمهندسين المتخصصين. التزامنا بالجودة والمواعيد هو أساس نجاحنا.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-slate-700 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-primary mb-1">+10</div>
                    <div className="text-sm text-slate-400">سنوات خبرة</div>
                  </div>
                  <div className="border border-slate-700 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-primary mb-1">+50</div>
                    <div className="text-sm text-slate-400">مشروع ناجح</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              خبرة عريقة في <span className="text-primary">قلب جدة</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              تأسست مؤسسة مجد الاصالة لتكون علامة فارقة في قطاع المقاولات والصيانة. نجمع بين الخبرة الفنية العميقة والتقنيات الحديثة لتقديم حلول مستدامة وعملية لعملائنا.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "فريق فني متخصص ومدرب",
                "استخدام أحدث المعدات والتقنيات",
                "ضمان جودة العمل والتنفيذ",
                "أسعار تنافسية وشفافة"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <Button size="lg" className="px-8">
              تعرف علينا أكثر
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
