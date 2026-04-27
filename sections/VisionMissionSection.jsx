import Card from "@/components/Card";
import Section from "@/components/Section";

const missions = [
  "Menerapkan standar Direct Trade untuk kesejahteraan petani",
  "Menjamin konsistensi rasa melalui kontrol kualitas di setiap tahap produksi",
  "Menghadirkan pengalaman kopi premium yang edukatif dan inklusif",
  "Menjadi ruang edukasi untuk membangun ekosistem bisnis kopi dari hulu sampai hilir",
];

export default function VisionMissionSection() {
  return (
    <Section id="vision" eyebrow="Credibility" title="Vision & Mission">
      <div className="grid gap-6 lg:grid-cols-2">
        <Card
          className="lg:col-span-2"
          title="Vision"
          description="Menjadi jembatan utama yang menghubungkan kemurnian hasil bumi petani Jawa Tengah dengan gaya hidup masyarakat modern melalui kualitas kopi kelas dunia."
        />
        {missions.map((mission, index) => (
          <Card key={mission} title={`Mission ${index + 1}`}>
            <p className="mt-3 text-[var(--muted)]">{mission}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
