#pragma once

#include <QGroupBox>
#include <QGridLayout>
#include <QLabel>
#include <QComboBox>
#include <QCheckBox>

class UpdateChannelPicker:public QGroupBox {
	Q_OBJECT
public:
	UpdateChannelPicker(QWidget *parent=nullptr);
	int updateChannel() const { return _updateChannel->currentIndex(); }
	bool testingEnabled() const { return _enableTesting->isChecked(); }
public slots:
	void updateChannelSelected(int index);
protected:
	QGridLayout	_layout;
	QLabel *	_updateChannelLbl;
	QComboBox *	_updateChannel;
	QLabel *	_updateChannelExplanation;
	QCheckBox *	_enableTesting;
};
