import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vibe - Your Personal Fashion Assistant</title>
        <meta name="description" content="Your personal AI-powered wardrobe and style guide" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        padding: '1rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background decorative elements */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '400px',
          height: '400px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-30%',
          left: '-10%',
          width: '300px',
          height: '300px',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          zIndex: 0
        }} />

        <div style={{ 
          maxWidth: '900px', 
          margin: '0 auto', 
          position: 'relative',
          zIndex: 1
        }}>
          {/* Hero Section */}
          <div style={{
            textAlign: 'center',
            padding: '3rem 1rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(255,255,255,0.15)',
              padding: '0.5rem 1.5rem',
              borderRadius: '25px',
              marginBottom: '1.5rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>✨ AI-Powered Fashion</span>
            </div>
            
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '800',
              marginBottom: '1rem',
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
              lineHeight: '1.2'
            }}>
              Your Personal AI Fashion Assistant
            </h1>

            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: '600',
              marginBottom: '1.5rem',
              color: '#FFD700',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)'
            }}>
              Never wonder what to wear again
            </h2>

            <p style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
              marginBottom: '1.5rem',
              lineHeight: '1.7',
              opacity: '0.95',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Vibe is your personal AI fashion assistant that elevates your style and generates personalized outfits based on your closet, lifestyle, and preferences.
            </p>

            <div style={{
              background: 'rgba(255,255,255,0.1)',
              padding: '1.5rem',
              borderRadius: '15px',
              marginBottom: '2rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                opacity: '0.9',
                margin: 0
              }}>
                <strong>Did you know?</strong> Most people wear less than 20% of their closets regularly. 
                Everyday clothing decisions impact your mood and how you present yourself in all aspects of life.
              </p>
            </div>

            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.6',
              opacity: '0.9',
              fontStyle: 'italic'
            }}>
              Vibe's mission is to help everyone look and feel their best, making fashion accessible and effortless for everyone.
            </p>
          </div>

          {/* Features Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {/* Feature Card 1 */}
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              padding: '2rem',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                fontSize: '1.5rem'
              }}>
                🎯
              </div>
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: 'white'
              }}>
                Personalized AI Outfit Recommendations
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#FFD700' }}>•</span>
                  Get daily outfit suggestions based on weather and schedule
                </li>
                <li style={{ marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#FFD700' }}>•</span>
                  Generate outfits for any event or occasion
                </li>
                <li style={{ marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#FFD700' }}>•</span>
                  Ask Vibe to style specific pieces in your closet
                </li>
              </ul>
            </div>

            {/* Feature Card 2 */}
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              padding: '2rem',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                fontSize: '1.5rem'
              }}>
                📱
              </div>
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: 'white'
              }}>
                Organize Your Digital Closet
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#FFD700' }}>•</span>
                  Effortlessly upload and organize all clothing items
                </li>
                <li style={{ marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#FFD700' }}>•</span>
                  AI removes backgrounds and adds clothing details
                </li>
                <li style={{ marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#FFD700' }}>•</span>
                  Get insights on style and wardrobe analytics
                </li>
              </ul>
            </div>

            {/* Feature Card 3 */}
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              padding: '2rem',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                fontSize: '1.5rem'
              }}>
                ✨
              </div>
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: 'white'
              }}>
                Discover New Looks
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#FFD700' }}>•</span>
                  Explore outfit ideas matching your existing clothes
                </li>
                <li style={{ marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#FFD700' }}>•</span>
                  Creative suggestions for mixing and matching
                </li>
                <li style={{ marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#FFD700' }}>•</span>
                  Rediscover forgotten pieces in your wardrobe
                </li>
              </ul>
            </div>

            {/* Feature Card 4 */}
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              padding: '2rem',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                fontSize: '1.5rem'
              }}>
                📊
              </div>
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: 'white'
              }}>
                Wardrobe Insights & Analytics
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#FFD700' }}>•</span>
                  See what you wear most and what's gathering dust
                </li>
                <li style={{ marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#FFD700' }}>•</span>
                  Get tips on making the most of your closet
                </li>
                <li style={{ marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#FFD700' }}>•</span>
                  Track your style evolution over time
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div style={{
            textAlign: 'center',
            padding: '3rem 2rem',
            background: 'rgba(255,255,255,0.15)',
            borderRadius: '25px',
            backdropFilter: 'blur(15px)',
            border: '2px solid rgba(255,255,255,0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-50%',
              right: '-20%',
              width: '200px',
              height: '200px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '50%',
              filter: 'blur(30px)'
            }} />
            
            <h2 style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              position: 'relative',
              zIndex: 1
            }}>
              Ready to transform the way you get dressed?
            </h2>
            
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '2.5rem',
              opacity: '0.9',
              position: 'relative',
              zIndex: 1
            }}>
              Let your wardrobe work for you!
            </p>
            
            <Link href="/support" style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%)',
              color: 'white',
              padding: '1.2rem 2.5rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              border: '2px solid rgba(255,255,255,0.4)',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
              position: 'relative',
              zIndex: 1
            }}>
              Contact Support →
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}