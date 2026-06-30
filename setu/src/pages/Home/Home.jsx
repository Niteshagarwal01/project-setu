import React from 'react';
import { HeroSection }          from './sections/HeroSection';
import { ManifestoSection }     from './sections/ManifestoSection';
import { FeaturesSection }      from './sections/FeaturesSection';
import { HeritageMapPreview }   from './sections/HeritageMapPreview';
import { TruthBountyPreview }   from './sections/TruthBountyPreview';
import { PulseRadarPreview }    from './sections/PulseRadarPreview';
import { ImpactSection }        from './sections/ImpactSection';
import { JoinSection }          from './sections/JoinSection';

export function Home() {
  return (
    <main>
      <HeroSection />
      <ManifestoSection />
      <FeaturesSection />
      <HeritageMapPreview />
      <TruthBountyPreview />
      <PulseRadarPreview />
      <ImpactSection />
      <JoinSection />
    </main>
  );
}
