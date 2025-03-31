const User = require('../models/User');
const notificationService = require('../utils/notificationService');

exports.sendSOSAlert = async (req, res) => {
    const { userId, location } = req.body;
    const user = await User.findById(userId);
    
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Send SOS notification
    notificationService.sendNotification(user.emergencyContacts, `SOS Alert! Location: ${location}`);
    res.json({ message: 'SOS alert sent successfully' });
};
