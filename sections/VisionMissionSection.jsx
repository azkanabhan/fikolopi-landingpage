import Card from "@/components/Card";
import Section from "@/components/Section";

export default function VisionMissionSection({ dictionary }) {
  const vm = dictionary?.visionMission ?? {};
  const missions = vm.missions ?? [];

  return (
    <Section id="vision" eyebrow={vm.eyebrow} title={vm.title}>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card
          className="lg:col-span-2"
          title={vm.visionTitle}
          description={vm.visionText}
        />
        {missions.map((mission, index) => (
          <Card key={mission} title={`${vm.missionPrefix} ${index + 1}`}>
            <p className="mt-3 text-[var(--muted)]">{mission}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
