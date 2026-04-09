'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    {
      icon: MapPin,
      title: 'Location',
      content: 'Utawala, Gesora Road, near Knowledville Schools',
      subtext: 'P.O. Box 49860-00100, Nairobi GPO, KENYA'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+254 702 782 335',
      subtext: '+254 726 002 662'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'Kemsapaloha@gmail.com',
      subtext: 'Respond within 24 hours'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: 'Chat with us',
      subtext: 'Available 9 AM - 6 PM'
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-5xl md:text-5xl font-bold text-foreground">
              Have <span className="text-primary">Questions?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We are always here to assist you. Reach out using the details below.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={index}
                  className="group relative p-8 bg-card border border-border/60 rounded-xl hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

                  <div className="relative z-10 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{method.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{method.content}</p>
                      <p className="text-xs text-muted-foreground/70 mt-1">{method.subtext}</p>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500 rounded-b-xl" />
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 mt-8 animate-fade-in-up">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Your Name</label>
                <Input
                  placeholder="John Doe"
                  className="bg-muted/50 border-border/60 focus:border-primary focus:ring-primary transition-all duration-300"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="bg-muted/50 border-border/60 focus:border-primary focus:ring-primary transition-all duration-300"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Subject</label>
                <Input
                  placeholder="How can we help?"
                  className="bg-muted/50 border-border/60 focus:border-primary focus:ring-primary transition-all duration-300"
                />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Send Message
              </Button>
            </form>

            <Textarea
              placeholder="Tell us about your inquiry..."
              className="h-full min-h-[250px] bg-muted/50 border-border/60 focus:border-primary focus:ring-primary transition-all duration-300 resize-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
