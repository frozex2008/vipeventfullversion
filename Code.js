const inviteLinks = [
    'https://invite.duolingo.com/family-plan/2-L7HA-L837-V4YF-C17H',
    'https://invite.duolingo.com/family-plan/2-X3NK-H3U7-7866-H32H',
    'https://invite.duolingo.com/family-plan/2-Z1Q1-D6UR-76W3-687U',
    'https://invite.duolingo.com/family-plan/2-D7D5-J588-78AJ-D3WY',
    'https://invite.duolingo.com/family-plan/2-C7G7-F5EQ-F5LU-V5DD',
    'https://invite.duolingo.com/family-plan/2-82E4-G2CL-W4D3-66LC',
    'https://invite.duolingo.com/family-plan/2-C5E7-W77P-J3QG-S2Q1',
    'https://invite.duolingo.com/family-plan/2-X1QK-12UT-22TV-D7LT',
    'https://invite.duolingo.com/family-plan/2-K6QT-87TE-V7NL-Z5E6',
    'https://invite.duolingo.com/family-plan/2-P8RC-V3T7-251Q-F5S3',
    'https://invite.duolingo.com/family-plan/2-B3M2-K1SN-R3ZB-S6YM',
    'https://invite.duolingo.com/family-plan/2-W2HD-X8ZF-A21C-L7BF',
    'https://invite.duolingo.com/family-plan/2-78MD-K334-T4MU-Y4RA',
    'https://invite.duolingo.com/family-plan/2-C4UH-V5AU-275H-V5KG'
];

getSuperButton.addEventListener('click', function() {
    const randomLink = inviteLinks[Math.floor(Math.random() * inviteLinks.length)];
    window.open(randomLink, '_blank');
});
