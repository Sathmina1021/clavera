ggimport React from 'react';
import { Clock, MapPin } from 'lucide-react';

const UnawatunaBlog = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e9d6b6' }}>
      {/* Blog Header */}
      <div className="border-b-4" style={{ backgroundColor: '#22404a', borderColor: '#ea8f32' }}>
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex items-center gap-2 text-sm mb-4" style={{ color: '#c5bea1' }}>
            <MapPin className="w-4 h-4" style={{ color: '#ea8f32' }} />
            <span>Unawatuna, Southern Province, Sri Lanka</span>
            <span className="mx-2">•</span>
            <Clock className="w-4 h-4" style={{ color: '#ea8f32' }} />
            <span>10 min read</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ color: '#e9d6b6' }}>
            Unawatuna: A Paradise Beach on the South Coast
          </h1>
          
          <p className="text-xl mb-6 leading-relaxed" style={{ color: '#c5bea1' }}>
            Discover the golden sands and turquoise waters of Unawatuna, a world-renowned beach destination.
          </p>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-4" style={{ ringColor: '#ea8f32' }}>
          <img 
            src="/images/blog/unawatuna-beach.jpg" 
            alt="Unawatuna Beach" 
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      </div>

      {/* Blog Content */}
      <article className="max-w-4xl mx-auto px-6 pb-16">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl mb-8 leading-relaxed" style={{ color: '#22404a' }}>
            Unawatuna is a coastal town in Galle district of Sri Lanka. Unawatuna is a major tourist attraction in Sri Lanka and famous for its beautiful beach and corals.
          </p>
          
          <p className="mb-8 text-lg" style={{ color: '#22404a' }}>
            It is a suburb of Galle, about 5 kilometres (3.1 mi) southeast to the city center and about 108 kilometres (67 mi) south of Colombo. Unawatuna is situated at an elevation of 5 metres (16 ft) above the sea level.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: '#22404a' }}>
            The Legend of Unawatuna
          </h2>
          
          <p className="mb-6 text-lg" style={{ color: '#22404a' }}>
            The name Unawatuna is derived from the Sinhala words "unna" meaning "less" and "watuna" meaning "fell". According to the Ramayana, the monkey-god Hanuman was sent back to India to fetch the four medicinal herbs from Himalayas in order to heal Lakshmana who was wounded. Hanuman failed to identify these herbs, so he lifted the entire mountain and carried it to the battlefield to try to save Lakshmana, but in the process, a chunk of it "fell down" in the location of the present day Unawatuna.
          </p>
        </div>
      </article>
    </div>
  );
};

export default UnawatunaBlog;
