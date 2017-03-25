sudo dd if=/dev/zero of=/swapfile bs=1G count=2
sudo mkswap /swapfile
swapon /swapfile

