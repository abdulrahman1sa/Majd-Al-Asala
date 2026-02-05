import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Hammer, Snowflake, Wrench } from "lucide-react";
import imgContracting from "@/assets/service-contracting.png";
import imgCooling from "@/assets/service-cooling.png";
import imgMaintenance from "@/assets/service-maintenance.png";
import imgCoolingRoom from "@/assets/service-cooling-room.jpg";

const services = [
  {
    title: "المقاولات العامة",
    description: "تنفيذ المشاريع السكنية والتجارية بأعلى معايير الجودة الهندسية والإنشائية.",
    icon: Hammer,
    image: imgContracting,
  },
  {
    title: "التبريد والتكييف",
    description: "تركيب وصيانة أنظمة التكييف المركزي والوحدات المنفصلة وحلول التبريد الصناعي.",
    icon: Snowflake,
    image: imgCooling,
  },
  {
    title: "غرف التبريد",
    description: "صيانة وتصنيع غرف تبريد متحركة وثابتة بأحدث التقنيات لضمان أفضل حفظ للمنتجات.",
    icon: Snowflake,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "الصيانة العامة",
    description: "خدمات صيانة شاملة للمباني والمرافق لضمان استمرارية العمل وكفاءة الأداء.",
    icon: Wrench,
    image: imgMaintenance,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">خدماتنا المتميزة</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            نقدم مجموعة متكاملة من الخدمات الهندسية والفنية لتلبية كافة احتياجاتكم
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full border-none shadow-md">
                <div className="h-48 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
