'use client';
// Scale Data Engine exact replica - Machine Learning Engine page - Footer updated v3

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function MachineLearningEngine() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.body.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.width / 2) / rect.width,
        y: (e.clientY - rect.height / 2) / rect.height
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: '#000000',
      color: '#ffffff',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 0.6; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes glow {
          0% { box-shadow: 0 0 10px currentColor; }
          100% { box-shadow: 0 0 20px currentColor, 0 0 30px currentColor; }
        }
      `}</style>
      {/* Clean Navigation */}
      <nav style={{position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'rgba(10, 10, 10, 0.95)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #1a1a1a'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '4rem'}}>
            {/* Logo */}
            <Link href="/" style={{textDecoration: 'none'}}>
              <span style={{
                fontSize: '1.5rem', 
                fontWeight: '500', 
                color: '#ffffff',
                textTransform: 'lowercase',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                letterSpacing: '0.01em',
                textShadow: '0 0 12px rgba(255, 255, 255, 0.4), 0 0 24px rgba(255, 255, 255, 0.2)',
                filter: 'blur(0.2px)'
              }}>
                elysium
              </span>
            </Link>
            
            {/* Navigation Links */}
            <div style={{display: 'flex', alignItems: 'center', gap: '2rem'}}>
              <Link href="/products" style={{color: '#e5e7eb', fontSize: '0.9rem', fontWeight: '500', textDecoration: 'none', transition: 'color 0.2s'}}>Products</Link>
              <Link href="/solutions" style={{color: '#e5e7eb', fontSize: '0.9rem', fontWeight: '500', textDecoration: 'none', transition: 'color 0.2s'}}>Solutions</Link>
              <Link href="/enterprise" style={{color: '#e5e7eb', fontSize: '0.9rem', fontWeight: '500', textDecoration: 'none', transition: 'color 0.2s'}}>Enterprise</Link>
            </div>
            
            {/* CTA Buttons */}
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
              <Link href="/contact" style={{
                backgroundColor: '#1a1a1a',
                color: '#ffffff',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                fontWeight: '600',
                border: '1px solid #374151',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
                textDecoration: 'none'
              }}>
                Get Started
                <ArrowRight size={16} style={{marginLeft: '0.5rem'}} />
              </Link>
              <Link href="/" style={{color: '#e5e7eb', fontSize: '0.9rem', fontWeight: '500', textDecoration: 'none'}}>Back to Home</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Scale Layout */}
      <section style={{
        padding: '4rem 2rem',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{maxWidth: '1400px', margin: '0 auto', width: '100%'}}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center'
          }}>
            
            {/* Left Side - Text and CTA */}
            <div>
              {/* Company Icon */}
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)',
                borderRadius: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem',
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Proper lightning bolt */}
                <div style={{
                  width: '20px',
                  height: '30px',
                  background: '#ffffff',
                  clipPath: 'polygon(50% 0%, 65% 35%, 100% 35%, 75% 60%, 90% 100%, 50% 70%, 10% 100%, 25% 60%, 0% 35%, 35% 35%)',
                  boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
                }} />
              </div>

              {/* Product Name */}
              <div style={{marginBottom: '1.5rem'}}>
                <span style={{color: '#9ca3af', fontSize: '1rem', fontWeight: '400'}}>elysium</span>
                <h1 style={{
                  fontSize: '3.5rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  lineHeight: '1.1',
                  margin: '0.5rem 0 0 0',
                  letterSpacing: '-0.02em'
                }}>
                  Machine Learning Engine
                </h1>
              </div>

              {/* Description */}
              <div style={{marginBottom: '2.5rem'}}>
                <p style={{
                  fontSize: '1.25rem',
                  color: '#ffffff',
                  lineHeight: '1.4',
                  margin: '0 0 0.5rem 0',
                  fontWeight: '400'
                }}>
                  Collect, curate, and analyze data.
                </p>
                <p style={{
                  fontSize: '1.25rem',
                  color: '#ffffff',
                  lineHeight: '1.4',
                  margin: '0',
                  fontWeight: '400'
                }}>
                  Train models and evaluate. Repeat.
                </p>
              </div>

              {/* CTA Button */}
              <button style={{
                background: '#ffffff',
                color: '#000000',
                padding: '1rem 1.5rem',
                borderRadius: '0.5rem',
                border: 'none',
                fontWeight: '500',
                fontSize: '1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s ease'
              }}>
                Book a Demo →
              </button>
            </div>

            {/* Right Side - Data Pipeline Visual */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              height: '500px'
            }}>
              
              {/* Raw Data Input */}
              <div style={{
                position: 'absolute',
                left: '0',
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.3rem',
                  width: '100px',
                  justifyContent: 'center'
                }}>
                  {Array.from({length: 25}, (_, i) => (
                    <div key={i} style={{
                      width: '6px',
                      height: '6px',
                      background: `hsl(${200 + (i * 10) % 60}, 60%, 50%)`,
                      borderRadius: '50%',
                      opacity: 0.8,
                      animation: `pulse 2s ease-in-out ${i * 0.1}s infinite alternate`
                    }} />
                  ))}
                </div>
                <span style={{color: '#ffffff', fontSize: '0.9rem', fontWeight: '500'}}>Raw Data</span>
              </div>

              {/* Simple Funnel Shape */}
              <div style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '300px',
                height: '150px',
                position: 'relative'
              }}>
                {/* Proper Funnel */}
                <div style={{
                  position: 'absolute',
                  left: '0',
                  top: '0',
                  width: '100%',
                  height: '100%',
                  background: 'rgba(75, 85, 99, 0.3)',
                  border: '1px solid rgba(75, 85, 99, 0.6)',
                  clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)'
                }}>
                  {/* Grid lines */}
                  <div style={{
                    position: 'absolute',
                    inset: '0',
                    backgroundImage: `
                      linear-gradient(rgba(75, 85, 99, 0.5) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(75, 85, 99, 0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px',
                    clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)'
                  }} />
                </div>
                
                {/* Process Labels */}
                <div style={{
                  position: 'absolute',
                  top: '-2rem',
                  left: '25%',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  Curate
                </div>
                <div style={{
                  position: 'absolute',
                  top: '-2rem',
                  right: '25%',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  Evaluate
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: '-2rem',
                  right: '25%',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  Annotate
                </div>
              </div>

              {/* HQ Data Output */}
              <div style={{
                position: 'absolute',
                right: '0',
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.4rem',
                  width: '100px',
                  justifyContent: 'center'
                }}>
                  {Array.from({length: 15}, (_, i) => (
                    <div key={i} style={{
                      width: '10px',
                      height: '10px',
                      background: `linear-gradient(135deg, ${
                        ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'][i % 5]
                      }, ${
                        ['#1d4ed8', '#7c3aed', '#0891b2', '#059669', '#d97706'][i % 5]
                      })`,
                      borderRadius: '50%',
                      boxShadow: `0 0 15px ${
                        ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'][i % 5]
                      }60`,
                      animation: `glow 3s ease-in-out ${i * 0.2}s infinite alternate`
                    }} />
                  ))}
                </div>
                <span style={{color: '#ffffff', fontSize: '0.9rem', fontWeight: '500'}}>HQ Data</span>
              </div>

              {/* Connection Lines */}
              <div style={{
                position: 'absolute',
                left: '120px',
                top: '50%',
                width: '60px',
                height: '2px',
                background: 'linear-gradient(90deg, #374151, transparent)',
                transform: 'translateY(-50%)'
              }} />
              <div style={{
                position: 'absolute',
                right: '120px',
                top: '50%',
                width: '60px',
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #3b82f6)',
                transform: 'translateY(-50%)'
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section style={{
        padding: '3rem 2rem',
        background: 'rgba(0, 0, 0, 0.3)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{maxWidth: '1400px', margin: '0 auto', textAlign: 'center'}}>
          <p style={{color: '#9ca3af', marginBottom: '2rem', fontSize: '0.875rem', fontWeight: '600', letterSpacing: '0.05em'}}>
            TRUSTED BY LEADING MINING COMPANIES
          </p>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '3rem', flexWrap: 'wrap'}}>
            <div style={{color: '#6b7280', fontSize: '1.25rem', fontWeight: '600'}}>BHP</div>
            <div style={{color: '#6b7280', fontSize: '1.25rem', fontWeight: '600'}}>Rio Tinto</div>
            <div style={{color: '#6b7280', fontSize: '1.25rem', fontWeight: '600'}}>Vale</div>
            <div style={{color: '#6b7280', fontSize: '1.25rem', fontWeight: '600'}}>Anglo American</div>
            <div style={{color: '#6b7280', fontSize: '1.25rem', fontWeight: '600'}}>Glencore</div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section style={{padding: '6rem 2rem'}}>
        <div style={{maxWidth: '1400px', margin: '0 auto'}}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem'
          }}>
            <div style={{textAlign: 'center'}}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
                fontSize: '2rem'
              }}>
                🎯
              </div>
              <h3 style={{fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#ffffff'}}>
                Quality
              </h3>
              <p style={{color: '#9ca3af', lineHeight: '1.6', fontSize: '1rem'}}>
                Provide high-quality data analysis with insights from domain experts.
              </p>
            </div>

            <div style={{textAlign: 'center'}}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
                fontSize: '2rem'
              }}>
                💰
              </div>
              <h3 style={{fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#ffffff'}}>
                Cost Effective
              </h3>
              <p style={{color: '#9ca3af', lineHeight: '1.6', fontSize: '1rem'}}>
                Optimize resources by focusing on high-value data insights.
              </p>
            </div>

            <div style={{textAlign: 'center'}}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
                fontSize: '2rem'
              }}>
                📈
              </div>
              <h3 style={{fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#ffffff'}}>
                Scalability
              </h3>
              <p style={{color: '#9ca3af', lineHeight: '1.6', fontSize: '1rem'}}>
                Support projects from small-scale experiments to large-scale deployments.
              </p>
            </div>

            <div style={{textAlign: 'center'}}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #10b981, #059669)',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
                fontSize: '2rem'
              }}>
                🌐
              </div>
              <h3 style={{fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#ffffff'}}>
                Diversity
              </h3>
              <p style={{color: '#9ca3af', lineHeight: '1.6', fontSize: '1rem'}}>
                Deliver diverse data analyses to enhance model performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section style={{
        padding: '6rem 2rem',
        background: 'rgba(0, 0, 0, 0.3)',
        textAlign: 'center'
      }}>
        <div style={{maxWidth: '1400px', margin: '0 auto'}}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '1.5rem',
            color: '#ffffff',
            lineHeight: '1.1'
          }}>
            The One-Stop-Shop For Building AI
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#9ca3af',
            marginBottom: '3rem',
            maxWidth: '800px',
            margin: '0 auto 3rem auto',
            lineHeight: '1.6'
          }}>
            Improve machine learning models with high-quality, diverse, and large datasets powered by experts.
          </p>
        </div>
      </section>

      {/* Supported Data Types */}
      <section style={{padding: '6rem 2rem'}}>
        <div style={{maxWidth: '1400px', margin: '0 auto'}}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#ffffff'
          }}>
            Supported Data Types
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              background: 'rgba(26, 26, 26, 0.6)',
              padding: '2rem',
              borderRadius: '1rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center'
            }}>
              <h3 style={{fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#ffffff'}}>
                Sensor Data
              </h3>
              <p style={{color: '#9ca3af', lineHeight: '1.6'}}>
                Vibration, Temperature, Pressure, Flow Rate
              </p>
            </div>

            <div style={{
              background: 'rgba(26, 26, 26, 0.6)',
              padding: '2rem',
              borderRadius: '1rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center'
            }}>
              <h3 style={{fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#ffffff'}}>
                Operational Data
              </h3>
              <p style={{color: '#9ca3af', lineHeight: '1.6'}}>
                Production Metrics, Maintenance Records, Performance Data
              </p>
            </div>

            <div style={{
              background: 'rgba(26, 26, 26, 0.6)',
              padding: '2rem',
              borderRadius: '1rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center'
            }}>
              <h3 style={{fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#ffffff'}}>
                Environmental Data
              </h3>
              <p style={{color: '#9ca3af', lineHeight: '1.6'}}>
                Weather, Air Quality, Geological Conditions
              </p>
            </div>

            <div style={{
              background: 'rgba(26, 26, 26, 0.6)',
              padding: '2rem',
              borderRadius: '1rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center'
            }}>
              <h3 style={{fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#ffffff'}}>
                Image & Video
              </h3>
              <p style={{color: '#9ca3af', lineHeight: '1.6'}}>
                Equipment Inspection, Safety Monitoring, Process Visualization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section style={{
        padding: '6rem 2rem',
        background: 'rgba(0, 0, 0, 0.3)',
        textAlign: 'center'
      }}>
        <div style={{maxWidth: '1400px', margin: '0 auto'}}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '3rem',
            color: '#ffffff'
          }}>
            Resources
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              background: 'rgba(26, 26, 26, 0.6)',
              padding: '2rem',
              borderRadius: '1rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'left'
            }}>
              <h3 style={{fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#ffffff'}}>
                ML Model Training Guide
              </h3>
              <p style={{color: '#9ca3af', lineHeight: '1.6', marginBottom: '1rem'}}>
                Learn how to build and train machine learning models for mining operations.
              </p>
              <Link href="#" style={{color: '#3b82f6', textDecoration: 'none', fontWeight: '600'}}>
                Read More →
              </Link>
            </div>

            <div style={{
              background: 'rgba(26, 26, 26, 0.6)',
              padding: '2rem',
              borderRadius: '1rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'left'
            }}>
              <h3 style={{fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#ffffff'}}>
                Data Collection Best Practices
              </h3>
              <p style={{color: '#9ca3af', lineHeight: '1.6', marginBottom: '1rem'}}>
                Optimize your data collection strategy for better model performance.
              </p>
              <Link href="#" style={{color: '#3b82f6', textDecoration: 'none', fontWeight: '600'}}>
                Read More →
              </Link>
            </div>

            <div style={{
              background: 'rgba(26, 26, 26, 0.6)',
              padding: '2rem',
              borderRadius: '1rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'left'
            }}>
              <h3 style={{fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#ffffff'}}>
                Case Studies
              </h3>
              <p style={{color: '#9ca3af', lineHeight: '1.6', marginBottom: '1rem'}}>
                Real-world examples of successful ML implementations in mining.
              </p>
              <Link href="#" style={{color: '#3b82f6', textDecoration: 'none', fontWeight: '600'}}>
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{
        padding: '6rem 2rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))'
      }}>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '1.5rem',
            color: '#ffffff'
          }}>
            Ready to Build Your AI Models?
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#9ca3af',
            marginBottom: '2rem',
            lineHeight: '1.6'
          }}>
            Start training machine learning models with high-quality mining data and deploy AI solutions that drive real business value.
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <button style={{
              background: '#ffffff',
              color: '#000000',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              border: 'none',
              fontWeight: '500',
              fontSize: '1.125rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              Book a Demo →
            </button>
            <button style={{
              background: 'transparent',
              color: '#ffffff',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              fontWeight: '500',
              fontSize: '1.125rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              Start Building
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '3rem 2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        background: 'rgba(0, 0, 0, 0.5)'
      }}>
        <div style={{maxWidth: '1400px', margin: '0 auto'}}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <div>
              <h4 style={{fontSize: '0.875rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem', letterSpacing: '0.05em'}}>COMPANY</h4>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li style={{marginBottom: '0.75rem'}}><Link href="/about" style={{color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem'}}>About</Link></li>
                <li style={{marginBottom: '0.75rem'}}><Link href="/terms" style={{color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem'}}>Terms</Link></li>
                <li style={{marginBottom: '1.5rem'}}><Link href="/privacy" style={{color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem'}}>Privacy</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{fontSize: '0.875rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem', letterSpacing: '0.05em'}}>GUIDES</h4>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li style={{marginBottom: '0.75rem'}}><Link href="/guides/predictive-maintenance" style={{color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem'}}>Predictive Maintenance</Link></li>
                <li style={{marginBottom: '0.75rem'}}><Link href="/guides/ml-model-training" style={{color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem'}}>ML Model Training</Link></li>
                <li style={{marginBottom: '0.75rem'}}><Link href="/guides/equipment-monitoring" style={{color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem'}}>Equipment Monitoring</Link></li>
                <li style={{marginBottom: '0.75rem'}}><Link href="/guides/failure-analysis" style={{color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem'}}>Failure Analysis</Link></li>
                <li style={{marginBottom: '0.75rem'}}><Link href="/guides/ai-for-mining" style={{color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem'}}>Guide to AI for Mining</Link></li>
                <li style={{marginBottom: '0.75rem'}}><Link href="/guides/fleet-management" style={{color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem'}}>Fleet Management</Link></li>
                <li style={{marginBottom: '1.5rem'}}><Link href="/guides/safety-analytics" style={{color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem'}}>Safety Analytics</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{fontSize: '0.875rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem', letterSpacing: '0.05em'}}>RESOURCES</h4>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li style={{marginBottom: '1.5rem'}}><Link href="/contact" style={{color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem'}}>Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '2rem',
            textAlign: 'center',
            color: '#6b7280',
            fontSize: '0.875rem'
          }}>
            <p>© 2025 Elysium. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}