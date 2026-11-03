const VideoSection = () => {
  return (
    <section className="relative py-12 bg-gradient-to-br from-black via-gray-950 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-orange-500/10 to-gray-900/50 rounded-3xl p-6 backdrop-blur-sm border border-gray-700">
            <div className="bg-black/50 rounded-2xl p-4">
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-lg"
                >
                  <source src="/es/marketing/lovable-uploads/desufuturo.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;