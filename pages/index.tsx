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
        padding: '2rem'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '1rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            Your Personal AI Fashion Assistant
          </h1>

          <p style={{
            fontSize: '1.2rem',
            textAlign: 'center',
            marginBottom: '2rem',
            lineHeight: '1.6',
            opacity: '0.9'
          }}>
            Vibe is your personal AI fashion assistant that elevates your style and generates personalized outfits based on your closet, lifestyle, and preferences. Most people wear less than 20% of their closets regularly, and everyday clothing decisions impact your mood and how you present yourself in all aspects of life.
          </p>

          <p style={{
            fontSize: '1.1rem',
            textAlign: 'center',
            marginBottom: '3rem',
            lineHeight: '1.6',
            opacity: '0.9'
          }}>
            Vibe's mission is to help everyone look and feel their best, making fashion accessible and effortless for everyone.
          </p>

          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '1.8rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              [Personalized AI Outfit Recommendations]
            </h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>• Get daily outfit suggestions based on the weather and your schedule</li>
              <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>• Generate outfits for any event, from casual meetups to formal occasions</li>
              <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>• Want to wear that specific piece? Ask Vibe to generate outfits with it</li>
            </ul>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '1.8rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              [Organize Your Digital Closet]
            </h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>• Effortlessly upload and organize all your clothing items in one place</li>
              <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>• Advanced AI technology removes photo backgrounds and automatically adds clothing details</li>
              <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>• Get insights on your style, most/least worn pieces, and wardrobe analytics</li>
            </ul>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '1.8rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              [Discover New Looks]
            </h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>• Explore outfit ideas and style inspirations that match the clothes you already own</li>
              <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>• Get creative suggestions for mixing and matching your existing pieces</li>
              <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>• Discover new ways to wear items you might have forgotten about</li>
            </ul>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '1.8rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              [Wardrobe Insights & Analytics]
            </h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>• See what you wear most often and what's gathering dust</li>
              <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>• Get tips on making the most of your closet and identifying gaps</li>
              <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>• Track your style evolution and fashion preferences over time</li>
            </ul>
          </div>

          <div style={{
            textAlign: 'center',
            marginTop: '3rem',
            padding: '2rem',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '10px',
            backdropFilter: 'blur(10px)'
          }}>
            <p style={{
              fontSize: '1.3rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
              Ready to transform the way you get dressed?
            </p>
            <p style={{
              fontSize: '1.1rem',
              marginBottom: '2rem',
              opacity: '0.9'
            }}>
              Let your wardrobe work for you!
            </p>
            
            <Link href="/support" style={{
              display: 'inline-block',
              background: 'rgba(255,255,255,0.2)',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: 'bold',
              border: '2px solid rgba(255,255,255,0.3)',
              transition: 'all 0.3s ease'
            }}>
              Contact Support
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}