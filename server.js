const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));
app.use(express.json());

// Main route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint for contact form (you can expand this)
app.post('/api/contact', (req, res) => {
    const { name, email, service, message } = req.body;
    console.log('Contact form submission:', { name, email, service, message });
    // Here you would typically send an email or save to database
    res.json({ success: true, message: 'Message received!' });
});

// API endpoint for products
app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            category: 'domain',
            name: 'Premium .com Domain',
            description: 'Short, memorable domain perfect for tech startups',
            price: 2999,
            icon: '🌐'
        },
        {
            id: 2,
            category: 'hosting',
            name: 'Business Hosting',
            description: '500GB Storage, Unlimited Bandwidth',
            price: 29,
            recurring: 'monthly',
            icon: '⚡'
        },
        {
            id: 3,
            category: 'design',
            name: 'Website Design Package',
            description: 'Custom 5-page responsive website',
            price: 1499,
            icon: '🎨'
        },
        {
            id: 4,
            category: 'app',
            name: 'Premium App Bundle',
            description: '10+ Professional apps lifetime license',
            price: 599,
            icon: '📱'
        },
        {
            id: 5,
            category: 'number',
            name: 'USA Virtual Number',
            description: 'Local presence with call forwarding',
            price: 15,
            recurring: 'monthly',
            icon: '🌍'
        }
    ];
    
    res.json(products);
});

app.listen(PORT, () => {
    console.log(`Ntando Store running on port ${PORT}`);
});
