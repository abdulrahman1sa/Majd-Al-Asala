import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">تواصل معنا</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            نحن هنا للرد على استفساراتكم وخدمتكم. لا تتردد في الاتصال بنا.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-none shadow-md">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">الموقع</h3>
                  <p className="text-slate-600">المملكة العربية السعودية، جدة</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">الهاتف</h3>
                  <p className="text-slate-600" dir="ltr">055 148 9385</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">البريد الإلكتروني</h3>
                  <p className="text-slate-600">info@majd-alasala.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">ساعات العمل</h3>
                  <p className="text-slate-600">السبت - الخميس: 8:00 ص - 6:00 م</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="h-2 bg-primary w-full" />
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">أرسل لنا رسالة</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">الاسم</label>
                      <Input placeholder="اسمك الكريم" className="bg-slate-50 border-slate-200" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">رقم الجوال</label>
                      <Input placeholder="05xxxxxxxx" className="bg-slate-50 border-slate-200 text-right" dir="ltr" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">الخدمة المطلوبة</label>
                    <Input placeholder="مثال: صيانة تكييف، ترميم منزل..." className="bg-slate-50 border-slate-200" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">الرسالة</label>
                    <Textarea placeholder="تفاصيل استفسارك..." className="min-h-[150px] bg-slate-50 border-slate-200" />
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto px-8">
                    إرسال الطلب
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
